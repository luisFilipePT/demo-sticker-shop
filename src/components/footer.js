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
        © {new Date().getFullYear()}, Built by&nbsp;
        <Link href="https://twitter.com/_luisFilipePT">@luis</Link>&nbsp;&&nbsp;
        <Link href="https://twitter.com/david_alecrim">@david</Link>&nbsp; with &nbsp;
        <Link href="https://www.gatsbyjs.org">Gatsby</Link>&nbsp;
        <Link href="https://www.netlify.com/">Netlify</Link>&nbsp;
        <Link href="https://firebase.google.com/">Firebase</Link>&nbsp;
        <Link href="https://www.shopify.com/">Shopify</Link>
      </Flex>
    </footer>
  )
}

export default Footer
