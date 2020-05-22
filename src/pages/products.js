import React from "react"
import { ToastProvider } from "react-toast-notifications"
import Layout from "../components/intro/layout"
import { Grid, Heading } from "theme-ui"
import SEO from "../components/intro/seo"

const ProductsPage = ({ data }) => (
  <ToastProvider>
    <Layout>
      <SEO title="Stickers" />
      <Heading variant="styles.h1">Stickers</Heading>
      <Grid columns={2}>
        {/* TODO: list the products */}
      </Grid>
    </Layout>
  </ToastProvider>
)

export default ProductsPage

// TODO: add query for products
