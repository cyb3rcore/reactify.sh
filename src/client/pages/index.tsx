import { useRouteData } from '$app/core'
import { readYaml } from '@/lib/content'
import { HeroSection, type HeroData } from '@/components/sections/hero'
import { FeaturesSection, type FeaturesData } from '@/components/sections/features'
import { CtaSection, type CtaData } from '@/components/sections/cta'

export function getMeta() {
  return { title: 'reactify — React SSR + RSC for Fastify', description: 'A batteries-included framework for building server-rendered React applications with Fastify, Vite, and React Server Components.' }
}

export async function getData() {
  const hero = readYaml<HeroData>('content/sections/hero.yaml')
  const features = readYaml<FeaturesData>('content/sections/features.yaml')
  const cta = readYaml<CtaData>('content/sections/cta.yaml')
  return { hero, features, cta }
}

export default function Home() {
  const { hero, features, cta } = useRouteData()

  return (
    <>
      <HeroSection data={hero} />
      <FeaturesSection data={features} />
      <CtaSection data={cta} />
    </>
  )
}
