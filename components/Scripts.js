import Script from 'next/script'
// import { useConfig } from '@/lib/nobelium-config'
import * as config from '@/lib/config'
import React from "react"

const Scripts = () => {
  // const config = useConfig()

  return (
    <>
      {config.analytics && config.analytics.provider === 'ackee' && (
        <Script
          src={config.analytics.ackeeConfig.tracker}
          data-ackee-server={config.analytics.ackeeConfig.dataAckeeServer}
          data-ackee-domain-id={config.analytics.ackeeConfig.domainId}
        />
      )}
      {config.analytics && config.analytics.provider === 'ga' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.gaConfig.measurementId}`}
          />
          <Script strategy="lazyOnload" id="ga">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.analytics.gaConfig.measurementId}', {
                page_path: window.location.pathname,
              });`}
          </Script>
        </>
      )}
    </>
  )
}

export default Scripts
