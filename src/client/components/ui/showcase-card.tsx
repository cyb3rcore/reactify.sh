'use client'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { showcaseCard } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(showcaseCard)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(ark.div, 'root')
export const Body = withContext(ark.div, 'body')
export const Name = withContext(ark.h3, 'name')
export const Description = withContext(ark.p, 'description')
export const Actions = withContext(ark.div, 'actions')

export interface ShowcaseEntry {
  name: string
  description: string
  url?: string
  github?: string
}
