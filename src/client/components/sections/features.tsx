import { css } from 'styled-system/css'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import * as Card from '@/components/ui/card'

export interface FeatureItem {
  title: string
  description: string
}

export interface FeaturesData {
  features: FeatureItem[]
}

export function FeaturesSection({ data }: { data: FeaturesData }) {
  return (
    <section className={css({ py: '16', px: '4', bg: 'bg.subtle' })}>
      <div className={css({ maxW: '1000px', mx: 'auto' })}>
        <Heading as="h2" size="2xl" className={css({ textAlign: 'center', mb: '12' })}>
          Why reactify?
        </Heading>
        <div
          className={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '6',
          })}
        >
          {data.features.map((feature, i) => (
            <Card.Root key={i} className={css({ p: '6' })}>
              <Card.Body>
                <Heading as="h3" size="lg" className={css({ mb: '2' })}>
                  {feature.title}
                </Heading>
                <Text color="fg.muted">{feature.description}</Text>
              </Card.Body>
            </Card.Root>
          ))}
        </div>
      </div>
    </section>
  )
}
