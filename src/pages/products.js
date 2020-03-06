import React from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import { Card, Heading, Grid, Image, Button, Box } from "theme-ui"
import { addProductToBasket } from "../utils"

const Product = ({ product }) => {
  return (
    <Card
      sx={{
        p: 10,
      }}
    >
      <Grid columns={2}>
        <Box>
          {/*<Image src={images[0].originalSrc} />*/}
          <Image src="https://placekitten.com/g/800/600" />
        </Box>
        <Box p={10}>
          <Heading variant="styles.h2">{product.title}</Heading>
          <Heading variant="styles.h3">{product.description}</Heading>
          <Heading variant="styles.h4">
            {product.priceRange.minVariantPrice.amount} €
          </Heading>
        </Box>
      </Grid>
      <Grid columns={2}>
        <Button onClick={() => navigate(`/product/${product.handle}`)}>
          Show Details
        </Button>
        <Button variant="secondary" onClick={() => addProductToBasket(product)}>
          Add to Cart
        </Button>
      </Grid>
    </Card>
  )
}

const ProductsPage = ({ data }) => (
  <Layout>
    <Heading variant="styles.h1">Products</Heading>
    <Grid columns={2}>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <>
          <Product key={node.shopifyId} product={node} />
          <Product key={node.shopifyId} product={node} />
          <Product key={node.shopifyId} product={node} />
        </>
      ))}
    </Grid>
  </Layout>
)

export default ProductsPage

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
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
    }
  }
`
