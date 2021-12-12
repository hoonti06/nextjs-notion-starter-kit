import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <meta
              name='google-site-verification'
              content='Zd8IhHjBYgO5M3l0oOViRYwa8OXdg2aLSOjUTIwe7yw'
            />
            <meta
              name='naver-site-verification'
              content='a50a08504e695cb943751e7ba6409a62103efc5c'
            />
            <link rel='shortcut icon' href='/favicon.png' />

            <link
              rel='apple-touch-icon'
              sizes='256x256'
              href='/4212916_education_note_notes_student_icon-3.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='128x128'
              href='/4212916_education_note_notes_student_icon-3.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/favicon-16x16.png'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
