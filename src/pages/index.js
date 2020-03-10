import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Heading, Flex, Button, Box, Alert } from "theme-ui"
import { auth, useAuth } from "gatsby-theme-firebase"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SignIn from "../components/signIn"

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
      <Alert variant="error">
        This is a Demo Shop. The stickers are mine and no transactions are real!
      </Alert>
      <Heading variant="styles.h2" my={10}>
        {data.site.siteMetadata.description} <span role="img">🎉</span>.
      </Heading>
      <Image />
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!isLoggedIn && <SignIn />}
        {isLoggedIn && (
          <>
            <Box py={16}>
              <Heading variant="styles.h2">
                Welcome back {profile.displayName}
                <span role="emoji">🎉</span>
              </Heading>
            </Box>
            <Box py={20}>
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
