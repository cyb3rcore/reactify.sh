'use client'
import { Link } from '@cyb3rcore/reactify'
import { css } from 'styled-system/css'
import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'

export interface CtaData {
  headline: string
  buttonText: string
  buttonLink: string
}

export function CtaSection({ data }: { data: CtaData }) {
  return (
    <section className={css({ py: '20', px: '4', textAlign: 'center' })}>
      <Heading as="h2" size="2xl" className={css({ mb: '6' })}>
        {data.headline}
      </Heading>
      <div className={css({ display: 'flex', gap: '4', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' })}>
        <Button asChild size="lg">
          <a href={data.buttonLink}>{data.buttonText}</a>
        </Button>
        <Link to="/blog">
          <span className={css({ color: 'accent.default', textDecoration: 'underline', fontWeight: 'medium', fontSize: 'lg', _hover: { color: 'accent.emphasized' } })}>
            Read the Blog
          </span>
        </Link>
      </div>
    </section>
  )
}
