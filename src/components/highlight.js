/** @jsx jsx */
import { jsx } from "theme-ui"

const Highlight = ({ children }) => {
  return (
    <span
      sx={{
        backgroundColor: `highlightBg`,
        padding: 1,
        borderRadius: 6,
      }}
    >
      {children}
    </span>
  )
}

export default Highlight
