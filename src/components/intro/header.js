import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Heading, Box, IconButton, Flex, Grid } from "theme-ui"
import { navigate } from "../../../.cache/gatsby-browser-entry"

const Header = ({ siteTitle }) => (
  <Flex
    sx={{
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "surface",
      height: 80,
      marginBottom: 20,
    }}
  >
    <Box>
      <Link to="/">
        <Heading variant="styles.h1">{siteTitle}</Heading>
      </Link>
    </Box>
    <Grid columns={3}>
      <Box sx={{ textAlign: "center" }}>
        <IconButton
          aria-label="Navigate to cart"
          onClick={() => navigate("/cart")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#8be9fd"
          >
            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
          </svg>
        </IconButton>
      </Box>
    </Grid>
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
