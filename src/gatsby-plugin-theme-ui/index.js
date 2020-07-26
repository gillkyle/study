import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui"

export default {
  ...novelaTheme,
  colors: {
    ...novelaTheme.colors,
    border: `#eaebef`,
    scriptureBg: `#f2f5f7`,
    highlightBg: `#f7c82080`,
    accentLink: `#1d049e`,
    modes: {
      ...novelaTheme.colors.modes,
      dark: {
        ...novelaTheme.colors.modes.dark,
        border: `#424242`,
        scriptureBg: `#262627`,
        highlightBg: `#f7c82080`,
        accentLink: `#ff9aff`,
      },
    },
  },
}
