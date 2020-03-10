import React from "react"
import { Box, Flex, Heading } from "theme-ui"
import { SocialLogins } from "gatsby-theme-firebase"

const SignIn = () => {
  return (
    <>
      <Box pt={16}>
        <Heading variant="styles.h2">Please sign in to start shopping</Heading>
      </Box>
      <Flex py={16}>
        <SocialLogins />
      </Flex>
    </>
  )
}

export default SignIn
