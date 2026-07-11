export const rsc = true
import { Badge } from '@/components/ui/badge'
import { listFiles, readYaml } from '../../server/content'
import { css } from 'styled-system/css'
import { Heading } from '@/components/ui/heading'
import * as ShowcaseCard from '@/components/ui/showcase-card'

export interface ShowcaseEntry {
  name: string
  description: string
  url?: string
  github?: string
}

export function getMeta() {
  return { title: 'Showcase — reactify', description: 'Projects built with reactify.' }
}

export default async function Showcase() {
  const files = listFiles('content/showcase', '.yaml')
  const entries: ShowcaseEntry[] = files
    .map((f) => readYaml<ShowcaseEntry>(`content/showcase/${f}`))
    .filter((e) => e.name)

  return (
    <div className={css({ maxW: '1000px', mx: 'auto', px: '4', py: '16' })}>
      <Heading as="h1" size="3xl" className={css({ mb: '2' })}>
        Showcase
      </Heading>
      <p className={css({ color: 'fg.muted', mb: '10', fontSize: 'lg' })}>
        Projects and sites built with reactify.
      </p>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '6',
        })}
      >
        {entries.map((entry, i) => (
          <ShowcaseCard.Root key={i}>
            <ShowcaseCard.Body>
              <ShowcaseCard.Name>{entry.name}</ShowcaseCard.Name>
              <ShowcaseCard.Description>{entry.description}</ShowcaseCard.Description>
            </ShowcaseCard.Body>
            <ShowcaseCard.Actions>
              {entry.url && (
                <a href={entry.url} target="_blank" rel="noopener noreferrer">
                  <Badge variant="surface">Website</Badge>
                </a>
              )}
              {entry.github && (
                <a href={entry.github} target="_blank" rel="noopener noreferrer">
                  <Badge variant="surface">Source</Badge>
                </a>
              )}
            </ShowcaseCard.Actions>
          </ShowcaseCard.Root>
        ))}
        {entries.length === 0 && (
          <p className={css({ color: 'fg.muted', fontStyle: 'italic' })}>
            No entries yet. Be the first!
          </p>
        )}
      </div>
    </div>
  )
}
