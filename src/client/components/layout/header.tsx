'use client'
import { css } from 'styled-system/css'
import { Button } from '@/components/ui/button'
import { Link } from '@cyb3rcore/reactify'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/blog', label: 'Blog' },
  { href: '/changelog', label: 'Changelog' },
]

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link to={href}>
      <span
        className={css({
          px: '3',
          py: '2',
          color: 'fg.muted',
          textDecoration: 'none',
          borderRadius: 'l2',
          _hover: { bg: 'bg.subtle', color: 'fg.default' },
        })}
      >
        {label}
      </span>
    </Link>
  )
}

export function Header() {
  return (
    <header
      className={css({
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid',
        borderColor: 'border',
        bg: 'bg.default',
        backdropFilter: 'blur(8px)',
      })}
    >
      <nav
        className={css({
          maxW: '1200px',
          mx: 'auto',
          px: '4',
          h: '16',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        <Link to="/">
          <span className={css({ fontWeight: 'bold', fontSize: 'xl', textDecoration: 'none' })}>
            reactify
          </span>
        </Link>

        <div className={css({ display: 'flex', gap: '2', alignItems: 'center' })}>
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}

          <a
            href="https://docs.reactify.sh"
            className={css({
              px: '3',
              py: '2',
              color: 'fg.muted',
              textDecoration: 'none',
              borderRadius: 'l2',
              _hover: { bg: 'bg.subtle', color: 'fg.default' },
            })}
          >
            Docs
          </a>

          <a
            href="https://github.com/cyb3rcore/reactify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm">
              GitHub
            </Button>
          </a>
        </div>
      </nav>
    </header>
  )
}
