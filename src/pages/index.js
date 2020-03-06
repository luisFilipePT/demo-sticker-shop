import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Heading, Flex, Button, Box } from "theme-ui"
import { SocialLogins, auth, useAuth } from "gatsby-theme-firebase"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  const { isLoading, isLoggedIn, profile } = useAuth()

  const logout = () => {
    auth.signOut()
  }

  if (isLoading) return null

  return (
    <Layout>
      <SEO title="Home" />
      <Heading variant="styles.h2">
        {data.site.siteMetadata.description} <span role="img">🎉</span>.
      </Heading>
      <p>Now let's build something great.</p>
      <Image />
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!isLoggedIn && (
          <>
            <Box pt={16}>
              <Heading variant="styles.h2">
                Please sign in to start shopping
              </Heading>
            </Box>
            <Box py={16}>
              <SocialLogins />
            </Box>
          </>
        )}
        {isLoggedIn && (
          <>
            <Box py={16}>
              <Heading variant="styles.h2">
                Welcome back {profile.displayName}
                <span role="emoji">🎉</span>
              </Heading>
            </Box>
            <Box py={16}>
              <Heading variant="styles.h1">
                <Link to="/products">Buy stickers</Link>
              </Heading>
            </Box>
            <Box>
              <Button variant="secondary" onClick={logout}>
                Logout
              </Button>
            </Box>
          </>
        )}
      </Flex>
    </Layout>
  )
}

export default IndexPage
