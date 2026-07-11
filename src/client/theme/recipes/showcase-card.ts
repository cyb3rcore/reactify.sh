import { defineSlotRecipe } from '@pandacss/dev'

export const showcaseCard = defineSlotRecipe({
  className: 'showcase-card',
  slots: ['root', 'body', 'name', 'description', 'actions'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      p: '5',
      borderRadius: 'l2',
      borderWidth: '1px',
      borderColor: 'border',
      bg: 'bg.default',
      transition: 'all 0.2s',
      _hover: {
        boxShadow: 'md',
      },
    },
    body: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      gap: '1',
    },
    name: {
      textStyle: 'md',
      fontWeight: 'semibold',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
    actions: {
      display: 'flex',
      gap: '2',
      mt: '3',
    },
  },
})
