/** @jsx jsx */
import { jsx } from "theme-ui"

const Scripture = ({ children }) => {
  return (
    <div
      sx={{
        border: theme => `1px solid ${theme.colors.border}`,
        margin: `15px auto 50px`,
        width: `100%`,
        maxWidth: 744,
        p: `4`,
        backgroundColor: `#f0f4f7`,
        fontSize: 18,
        fontFamily: `Palatino`,
        lineHeight: 1.5,
        "& > *+*": {
          mb: 2,
        },
      }}
    >
      {children}
    </div>
  )
}

export default Scripture
