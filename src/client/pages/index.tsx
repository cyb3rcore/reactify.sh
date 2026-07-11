export const rsc = true
import { readYaml } from '../../server/content'
import { HeroSection, type HeroData } from '@/components/sections/hero'
import { FeaturesSection, type FeaturesData } from '@/components/sections/features'
import { CtaSection, type CtaData } from '@/components/sections/cta'

export function getMeta() {
  return { title: 'reactify — React SSR + RSC for Fastify', description: 'A batteries-included framework for building server-rendered React applications with Fastify, Vite, and React Server Components.' }
}

export default async function Home() {
  const hero = readYaml<HeroData>('content/sections/hero.yaml')
  const features = readYaml<FeaturesData>('content/sections/features.yaml')
  const cta = readYaml<CtaData>('content/sections/cta.yaml')

  return (
    <>
      <HeroSection data={hero} />
      <FeaturesSection data={features} />
      <CtaSection data={cta} />
    </>
  )
}
