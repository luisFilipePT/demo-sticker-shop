import React from "react"
import { ToastProvider } from "react-toast-notifications"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Grid, Heading } from "theme-ui"
import ProductCard from "../components/productCard"
import SEO from "../components/seo"

const ProductsPage = ({ data }) => (
  <ToastProvider>
    <Layout>
      <SEO title="Stickers" />
      <Heading variant="styles.h1">Stickers</Heading>
      <Grid columns={2}>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <>
            <ProductCard key={node.shopifyId} product={node} />
            <ProductCard key={node.shopifyId} product={node} />
            <ProductCard key={node.shopifyId} product={node} />
          </>
        ))}
      </Grid>
    </Layout>
  </ToastProvider>
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
