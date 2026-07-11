import { useParams } from '$app/core'
import { css } from 'styled-system/css'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { readMarkdown } from '../../../server/content'

interface BlogPostData {
  title: string
  date: string
  html: string
}

export function getMeta() {
  return { title: 'Blog — reactify' }
}

// RSC mode: the component runs server-side and can read files directly.
// useParams() is available in RSC via reactify's AsyncLocalStorage context bridge.
export const rsc = true

export default async function BlogPost() {
  const params = useParams()
  const slug = params?.slug as string
  if (!slug) return <p>Post not found.</p>

  const filePath = `content/blog/${slug}.md`
  let frontmatter: Record<string, unknown>
  let html: string
  try {
    const result = readMarkdown(filePath)
    frontmatter = result.frontmatter
    html = result.html
  } catch {
    return (
      <div className={css({ maxW: '720px', mx: 'auto', px: '4', py: '16' })}>
        <Heading as="h1" size="3xl">Post not found</Heading>
        <Text color="fg.muted">No blog post found with slug "{slug}".</Text>
      </div>
    )
  }

  return (
    <article className={css({ maxW: '720px', mx: 'auto', px: '4', py: '16' })}>
      <Heading as="h1" size="3xl" className={css({ mb: '2' })}>
        {frontmatter.title as string}
      </Heading>
      <Text size="sm" color="fg.muted" className={css({ mb: '8' })}>
        {frontmatter.date as string}
      </Text>
      <div
        className={css({
          '& h2': { mt: '8', mb: '3', fontSize: '2xl', fontWeight: 'bold' },
          '& h3': { mt: '6', mb: '2', fontSize: 'xl', fontWeight: 'bold' },
          '& p': { mb: '4', lineHeight: '1.75' },
          '& ul': { mb: '4', pl: '6' },
          '& li': { mb: '1' },
          '& code': { bg: 'bg.subtle', px: '1.5', py: '0.5', borderRadius: 'l1', fontSize: 'sm' },
          '& pre': { bg: 'bg.subtle', p: '4', borderRadius: 'l2', mb: '4', overflowX: 'auto' },
        })}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}
