import merge from "lodash.merge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

// const blue60 = `#007acc`
// const blue30 = `#66E0FF`
// const blueGray = `#282c35`

export default merge({}, defaultThemeColors, {
  // text: blueGray,
  // primary: blue60,
  // heading: blueGray,
  // modes: {
  //   dark: {
  //     background: blueGray,
  //     primary: blue30,
  //     highlight: blue60,
  //   },
  // },
})
