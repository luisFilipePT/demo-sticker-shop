import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Heading, Flex, Button, Box, Alert, Text } from "theme-ui"
import { auth, useAuth } from "gatsby-theme-firebase"

import Layout from "../components/intro/layout"
import Image from "../components/intro/image"
import SEO from "../components/intro/seo"
import SignIn from "../components/intro/signIn"

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
        This is a Demo Shop. The stickers are dummy ones and no transactions are real!
      </Alert>
      <Heading variant="styles.h2" my={10} mb={20}>
        {data.site.siteMetadata.description} <span role="img" aria-label="img">🎉</span>.
      </Heading>
      <Image />
      <Flex sx={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!isLoggedIn && <SignIn />}
        {isLoggedIn && (
          <>
            <Box py={16}>
              <Text>
                Welcome back, <strong>{profile.displayName}</strong>
                <span role="img" aria-label="img">&nbsp;🎉</span>
              </Text>
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
