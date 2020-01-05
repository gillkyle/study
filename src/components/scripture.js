/** @jsx jsx */
import { jsx } from "theme-ui"

const Scripture = ({ title, link, children }) => {
  return (
    <div
      sx={{
        border: theme => `1px solid ${theme.colors.border}`,
        margin: `15px auto 50px`,
        width: `100%`,
        maxWidth: 744,
        p: `4`,
        color: `articleText`,
        backgroundColor: `scriptureBg`,
        fontSize: 18,
        fontFamily: `Palatino`,
        lineHeight: 1.5,
        "& > *+*": {
          mb: 2,
        },
      }}
    >
      <div
        sx={{
          fontSize: `2`,
          fontWeight: `700`,
          mb: `1`,
          fontStyle: `italic`,
          color: `grey`,
        }}
      >
        <a
          sx={{
            color: `accent`,
            textDecoration: `none`,
            cursor: link ? `pointer` : `default`,
          }}
          href={link && link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
      {children}
    </div>
  )
}

export default Scripture
