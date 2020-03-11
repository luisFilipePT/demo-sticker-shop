import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Heading, Grid, Image, Button, Box, Container } from "theme-ui"
import { addProductToBasket } from "../utils"

const ProductTemplate = ({ data }) => {
  const { title, description, priceRange } = data.shopifyProduct
  return (
    <Layout>
      <Grid columns={1} gap={30}>
        <Box sx={{ textAlign: "center"}}>
          <Image src="https://placekitten.com/g/600/600" style={{ maxHeight: '45vh' }}/>
        </Box>
        <Container p={4} bg="surface" mb={20}>
          <Grid columns={2}>
            <Box>
              <Heading variant="styles.h1">{title}</Heading>
              <Heading variant="styles.h3">{description}</Heading>
              <Heading variant="styles.h4">
                {priceRange.minVariantPrice.amount} €
              </Heading>
            </Box>
            <Box sx={{ textAlign: "right", padding: 35 }}>
              <Button
                variant="secondary"
                onClick={() => addProductToBasket(data.shopifyProduct)}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Container>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      shopifyId
      description
      handle
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images {
        originalSrc
      }
      variants {
        id
      }
    }
  }
`

export default ProductTemplate
