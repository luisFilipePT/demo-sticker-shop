import baseTheme from '@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui'

export default {
  ...baseTheme,
  buttons: {
    ...baseTheme.buttons,
    primary: {
      ...baseTheme.buttons.primary,
      transition: 'all 200ms',
      cursor: 'pointer',
      '&:hover': {
        bg: 'text',
      }
    },
    secondary: {
      ...baseTheme.buttons.primary,
      transition: 'all 200ms',
      cursor: 'pointer',
      '&:hover': {
        bg: 'text',
      }
    },
    icon: {
      cursor: 'pointer',
      '&:hover': {
        svg: {
          fill: 'primary'
        },
      }
    },  
  },
  alerts: {
    error: {
      fontSize: '120%',
      bg: 'error',
      marginBottom: 50,
      textAlign: 'center',
    },
  },
}