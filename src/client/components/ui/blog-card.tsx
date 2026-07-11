'use client'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { blogCard } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(blogCard)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(ark.a, 'root')
export const Date = withContext(ark.time, 'date')
export const Title = withContext(ark.h3, 'title')
export const Excerpt = withContext(ark.p, 'excerpt')
