'use client'
import { css } from 'styled-system/css'

export function Footer() {
  return (
    <footer
      className={css({
        borderTop: '1px solid',
        borderColor: 'border',
        py: '8',
        mt: 'auto',
      })}
    >
      <div
        className={css({
          maxW: '1200px',
          mx: 'auto',
          px: '4',
          textAlign: 'center',
          color: 'fg.muted',
          fontSize: 'sm',
        })}
      >
        <p>Built with the reactify framework.</p>
        <p className={css({ mt: '2' })}>
          <a
            href="https://github.com/cyb3rcore/reactify"
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              color: 'accent.default',
              textDecoration: 'underline',
              _hover: { color: 'accent.emphasized' },
            })}
          >
            GitHub
          </a>
          {' · '}
          <a
            href="https://docs.reactify.sh"
            className={css({
              color: 'accent.default',
              textDecoration: 'underline',
              _hover: { color: 'accent.emphasized' },
            })}
          >
            Docs
          </a>
          {' · '}
          <a
            href="https://npmjs.com/package/@cyb3rcore/reactify"
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              color: 'accent.default',
              textDecoration: 'underline',
              _hover: { color: 'accent.emphasized' },
            })}
          >
            npm
          </a>
        </p>
      </div>
    </footer>
  )
}
