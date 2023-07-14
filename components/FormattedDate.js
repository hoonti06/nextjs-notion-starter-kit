import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
// import { useConfig } from '@/lib/nobelium-config'
import * as config from '@/lib/config'
import React from "react";

dayjs.extend(localizedFormat)

const loaded = {}

export default function FormattedDate ({ date }) {
  const lang = config.lang.slice(0, 2)
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(loaded[lang] === true)

  useEffect(() => {
    if (!isLocaleLoaded) {
      // https://github.com/iamkun/dayjs/issues/792#issuecomment-737206977
      loaded[lang] ??= import(`dayjs/locale/${lang}.js`).then(
        () => {
          loaded[lang] = true
          dayjs.locale(lang)
        },
        () => console.warn(`dayjs locale \`${lang}\` not found`)
      )
      loaded[lang].then(() => setIsLocaleLoaded(true))
    }

  }, [isLocaleLoaded, lang])

  return <span>{dayjs(date).format('ll')}</span>
}
