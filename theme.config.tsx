import React from 'react'
import Head from 'next/head'
import type { NextraThemeLayoutProps } from 'nextra'

export default {
  primaryHue: 245,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Awardify'
    }
  },
  logo: (
    <>
      <img src="https://media.discordapp.net/attachments/1100961292547805236/1153185431442169896/IMG_20230917_194156-removebg-preview_1.png?width=393&height=393" alt="logo" width="30" height="30" />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Awardify
      </span>
    </>
  ),
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="" target="_blank">
          ifml
        </a>
        .
      </span>
    )
  },
  Layout({ children, pageOpts }: NextraThemeLayoutProps) {
    const { title, frontMatter, headings } = pageOpts

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="og:image" content={frontMatter.image} />
        </Head>
        <h1>My Theme</h1>
        Table of Contents:
        <ul>
          {headings.map(heading => (
            <li key={heading.value}>{heading.value}</li>
          ))}
        </ul>
        <div style={{ border: '1px solid' }}>{children}</div>
      </div>
    )
  }
}