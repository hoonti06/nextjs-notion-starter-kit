// import { useConfig } from '@/lib/nobelium-config'
import * as config from '@/lib/config'
import { useEffect } from 'react'
import React from "react";

const Utterances = ({ issueTerm, layout }) => {
  // const BLOG = useConfig()

  useEffect(() => {
    const theme =
      config.appearance === 'auto'
        ? 'preferred-color-scheme'
        : config.appearance === 'light'
          ? 'github-light'
          : 'github-dark'
    const script = document.createElement('script')
    const anchor = document.getElementById('comments')
    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', true)
    script.setAttribute('repo', config.comment.utterancesConfig.repo)
    script.setAttribute('issue-term', issueTerm)
    script.setAttribute('theme', theme)
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ''
    }
  })
  return (
    <>
      <div
        id="comments"
        className={layout && layout === 'fullWidth' ? '' : 'md:-ml-16'}
      >
        <div className="utterances-frame"></div>
      </div>
    </>
  )
}

export default Utterances
