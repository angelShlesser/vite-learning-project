import { Global, css } from "@emotion/react"

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex: 1;
    height: 100%;
  }
`

function GlobalStyles() {
  return <Global styles={globalStyles} />
}

export default GlobalStyles
