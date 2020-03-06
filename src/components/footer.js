import React from "react"
import { Flex, Link } from "theme-ui"

const Footer = () => {
  return (
    <footer>
      <Flex
        sx={{
          justifyContent: "center",
          backgroundColor: "surface",
          height: 60,
          paddingY: 20,
          marginTop: 20,
        }}
      >
        © {new Date().getFullYear()}, Built by @luis & @david with &nbsp;
        <Link href="https://www.gatsbyjs.org">Gatsby</Link>&nbsp;
        <Link href="https://www.netlify.com/">Netlify</Link>&nbsp;
        <Link href="https://www.gatsbyjs.org">Firebase</Link>&nbsp;
        <Link href="https://www.gatsbyjs.org">Shopify</Link>
      </Flex>
    </footer>
  )
}

export default Footer
