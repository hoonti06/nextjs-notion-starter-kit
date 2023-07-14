// global styles shared across the entire site
import * as React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import * as Fathom from 'fathom-client'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import posthog from 'posthog-js'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import 'styles/global.css'
// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'
// global style overrides for notion
import 'styles/notion.css'
// global style overrides for prism theme (optional)
import 'styles/prism-theme.css'

import { bootstrap } from '@/lib/bootstrap-client'
import {
  fathomConfig,
  fathomId,
  isServer,
  posthogConfig,
  posthogId
} from '@/lib/config'

import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
// import App from 'next/app'
import '@/styles/globals.css'
import '@/styles/notion.css'
import dynamic from 'next/dynamic'
// import loadLocale from '@/assets/i18n'
import { ConfigProvider } from '@/lib/nobelium-config'
// import { LocaleProvider } from '@/lib/locale'
import { prepareDayjs } from '@/lib/dayjs'
import { ThemeProvider } from '@/lib/theme'
import Scripts from '@/components/Scripts'
import * as config from '@/lib/config'

const Ackee = dynamic(() => import('@/components/Ackee'), { ssr: false })
const Gtag = dynamic(() => import('@/components/Gtag'), { ssr: false })

if (!isServer) {
  bootstrap()
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function App({ Component, pageProps, config }: AppProps) {
  const router = useRouter()

  React.useEffect(() => {
    function onRouteChangeComplete() {
      if (fathomId) {
        Fathom.trackPageview()
      }

      if (posthogId) {
        posthog.capture('$pageview')
      }
    }

    if (fathomId) {
      Fathom.load(fathomId, fathomConfig)
    }

    if (posthogId) {
      posthog.init(posthogId, posthogConfig)
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  return (
    <ConfigProvider value={config}>
      <Scripts />
      <ThemeProvider>
        <>
          {process.env.VERCEL_ENV === 'production' && config?.analytics?.provider === 'ackee' && (
            <Ackee
              ackeeServerUrl={config.analytics.ackeeConfig.dataAckeeServer}
              ackeeDomainId={config.analytics.ackeeConfig.domainId}
            />
          )}
          {process.env.VERCEL_ENV === 'production' && config?.analytics?.provider === 'ga' && <Gtag />}
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </ConfigProvider>
  )
}

App.getInitialProps = async ctx => {
  // const config = typeof window === 'object'
  //   ? await fetch('/api/config').then(res => res.json())
  //   : await import('@/lib/server/config').then(module => module["clientConfig"])

  prepareDayjs(config.timezone)

  return {
    ...App.getInitialProps(ctx),
    config
  }
}
