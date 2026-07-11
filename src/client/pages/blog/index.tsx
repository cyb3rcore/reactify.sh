export const rsc = true
import { css } from 'styled-system/css'
import { Heading } from '@/components/ui/heading'
import * as BlogCard from '@/components/ui/blog-card'
import { listFiles, readMarkdown } from '../../../server/content'

interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
}

export function getMeta() {
  return { title: 'Blog — reactify', description: 'Dev notes, guides, and announcements about reactify.' }
}

export default async function BlogIndex() {
  const files = listFiles('content/blog', '.md')

  const posts: BlogPost[] = files
    .map((file) => {
      const { frontmatter } = readMarkdown(`content/blog/${file}`)
      const fm = frontmatter as Record<string, string | undefined>
      return {
        slug: file.replace(/\.md$/, ''),
        title: fm.title || file,
        date: fm.date || '',
        excerpt: fm.excerpt || '',
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className={css({ maxW: '800px', mx: 'auto', px: '4', py: '16' })}>
      <Heading as="h1" size="3xl" className={css({ mb: '2' })}>
        Blog
      </Heading>
      <p className={css({ color: 'fg.muted', mb: '10', fontSize: 'lg' })}>
        Dev notes, guides, and announcements.
      </p>
      <div className={css({ display: 'grid', gap: '4' })}>
        {posts.map((post) => (
          <BlogCard.Root key={post.slug} href={`/blog/${post.slug}`}>
            <BlogCard.Date>{post.date}</BlogCard.Date>
            <BlogCard.Title>{post.title}</BlogCard.Title>
            {post.excerpt && <BlogCard.Excerpt>{post.excerpt}</BlogCard.Excerpt>}
          </BlogCard.Root>
        ))}
        {posts.length === 0 && (
          <p className={css({ color: 'fg.muted', fontStyle: 'italic' })}>
            No posts yet.
          </p>
        )}
      </div>
    </div>
  )
}
