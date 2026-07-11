import { readYaml } from '@/lib/content'
import { useRouteData } from '$app/core'
import { css } from 'styled-system/css'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Badge } from '@/components/ui/badge'

interface Release {
  version: string
  date: string
  notes: string
}

interface ChangelogData {
  releases: Release[]
}

export function getMeta() {
  return { title: 'Changelog — reactify', description: 'Release history for @cyb3rcore/reactify.' }
}

export async function getData(): Promise<ChangelogData> {
  try {
    return readYaml<ChangelogData>('content/changelog.yaml')
  } catch {
    return { releases: [] }
  }
}

export default function Changelog() {
  const { releases } = useRouteData()

  return (
    <div className={css({ maxW: '720px', mx: 'auto', px: '4', py: '16' })}>
      <Heading as="h1" size="3xl" className={css({ mb: '2' })}>
        Changelog
      </Heading>
      <p className={css({ color: 'fg.muted', mb: '10', fontSize: 'lg' })}>
        Release history for @cyb3rcore/reactify.
      </p>
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
        {releases.map((release, i) => (
          <div
            key={i}
            className={css({
              borderLeft: '2px solid',
              borderColor: 'border',
              pl: '4',
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'baseline', gap: '3', mb: '1' })}>
              <Heading as="h3" size="lg">
                v{release.version}
              </Heading>
              <Text size="sm" color="fg.muted">
                {release.date}
              </Text>
            </div>
            <Text>{release.notes}</Text>
          </div>
        ))}
        {releases.length === 0 && (
          <p className={css({ color: 'fg.muted', fontStyle: 'italic' })}>
            No releases listed yet.
          </p>
        )}
      </div>
    </div>
  )
}
