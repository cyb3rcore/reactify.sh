import { defineSlotRecipe } from '@pandacss/dev'

export const blogCard = defineSlotRecipe({
  className: 'blog-card',
  slots: ['root', 'date', 'title', 'excerpt'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
      p: '5',
      borderRadius: 'l2',
      borderWidth: '1px',
      borderColor: 'border',
      bg: 'bg.default',
      transition: 'all 0.2s',
      textDecoration: 'none',
      _hover: {
        bg: 'bg.subtle',
        borderColor: 'accent.default',
        transform: 'translateY(-2px)',
        boxShadow: 'md',
      },
    },
    date: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
    title: {
      textStyle: 'md',
      fontWeight: 'semibold',
      color: 'fg.default',
    },
    excerpt: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
  },
})
