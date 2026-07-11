'use client'
import type { ReactNode } from 'react'
import { css } from 'styled-system/css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', minH: '100dvh' })}>
      <Header />
      <main className={css({ flex: '1', w: 'full' })}>{children}</main>
      <Footer />
    </div>
  )
}
