import 'gitalk/dist/gitalk.css'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import cn from 'classnames'
import { fetchCusdisLang } from '@/lib/cusdisLang'
import * as config from '@/lib/config'
// import { useConfig } from '@/lib/nobelium-config'
import React from "react";

const GitalkComponent = dynamic(
  () => {
    return import('gitalk/dist/gitalk-component')
  },
  { ssr: false }
)
const UtterancesComponent = dynamic(
  () => {
    return import('@/components/Utterances')
  },
  { ssr: false }
)
const CusdisComponent = dynamic(
  () => {
    return import('react-cusdis').then(m => m.ReactCusdis)
  },
  { ssr: false }
)

const Comments = ({ frontMatter }) => {
  const router = useRouter()
  // const BLOG = useConfig()

  const fullWidth = frontMatter.fullWidth ?? false

  return (
    <div
      className={cn(
        'px-4 font-medium text-gray-500 dark:text-gray-400 my-5',
        fullWidth ? 'md:px-24' : 'mx-auto max-w-2xl',
      )}
    >
      {config.comment && config.comment.provider === 'gitalk' && (
        <GitalkComponent
          options={{
            id: frontMatter.id,
            title: frontMatter.title,
            clientID: config.comment.gitalkConfig.clientID,
            clientSecret: config.comment.gitalkConfig.clientSecret,
            repo: config.comment.gitalkConfig.repo,
            owner: config.comment.gitalkConfig.owner,
            admin: config.comment.gitalkConfig.admin,
            distractionFreeMode: config.comment.gitalkConfig.distractionFreeMode
          }}
        />
      )}
      {config.comment && config.comment.provider === 'utterances' && (
        <UtterancesComponent issueTerm={frontMatter.id} />
      )}
      {config.comment && config.comment.provider === 'cusdis' && (
        <CusdisComponent
          lang={fetchCusdisLang(config.lang)}
          attrs={{
            host: config.comment.cusdisConfig.host,
            appId: config.comment.cusdisConfig.appId,
            pageId: frontMatter.id,
            pageTitle: frontMatter.title,
            pageUrl: config.link + router.asPath,
            theme: config.appearance
          }}
        />
      )}
    </div>
  )
}

export default Comments
