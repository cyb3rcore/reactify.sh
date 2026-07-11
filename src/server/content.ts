import { readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { load as parseYaml } from 'js-yaml'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({ html: false })

/**
 * Resolve a project-relative path relative to the project root.
 * process.cwd() is always the project root in both dev and production.
 */
function resolvePath(relativePath: string): string {
  return resolve(process.cwd(), relativePath)
}

/**
 * Read and parse a YAML file from the content directory.
 * Path is relative to project root, e.g. "content/sections/hero.yaml"
 */
export function readYaml<T = Record<string, unknown>>(relativePath: string): T {
  const content = readFileSync(resolvePath(relativePath), 'utf-8')
  return parseYaml(content) as T
}

/**
 * List all files in a directory matching a pattern.
 */
export function listFiles(dir: string, ext: string): string[] {
  const absDir = resolvePath(dir)
  try {
    return readdirSync(absDir).filter((f) => f.endsWith(ext))
  } catch {
    return []
  }
}

/**
 * Read a Markdown file with frontmatter.
 * Returns parsed frontmatter, raw markdown body, and rendered HTML.
 */
export function readMarkdown(relativePath: string): {
  frontmatter: Record<string, unknown>
  content: string
  html: string
} {
  const raw = readFileSync(resolvePath(relativePath), 'utf-8')

  // Parse frontmatter (between --- delimiters)
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) {
    const html = md.render(raw)
    return { frontmatter: {}, content: raw, html }
  }

  const frontmatter = parseYaml(match[1]) as Record<string, unknown>
  const content = match[2].trim()
  const html = md.render(content)
  return { frontmatter, content, html }
}
