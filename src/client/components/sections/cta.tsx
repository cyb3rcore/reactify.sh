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
      <Button asChild size="lg">
        <a href={data.buttonLink}>{data.buttonText}</a>
      </Button>
    </section>
  )
}
