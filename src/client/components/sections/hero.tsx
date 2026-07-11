import { css } from 'styled-system/css'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'

export interface HeroData {
  headline: string
  subheading: string
  ctaText: string
  ctaLink: string
}

export function HeroSection({ data }: { data: HeroData }) {
  return (
    <section
      className={css({
        py: '24',
        px: '4',
        textAlign: 'center',
        maxW: '800px',
        mx: 'auto',
      })}
    >
      <Heading as="h1" size="4xl" className={css({ mb: '6' })}>
        {data.headline}
      </Heading>
      <Text size="lg" color="fg.muted" className={css({ mb: '8', maxW: '600px', mx: 'auto' })}>
        {data.subheading}
      </Text>
      <a href={data.ctaLink}>
        <Button size="lg">{data.ctaText}</Button>
      </a>
    </section>
  )
}
