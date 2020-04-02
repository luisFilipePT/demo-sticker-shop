import React from "react"
import { ToastProvider } from "react-toast-notifications"
import { graphql } from "gatsby"
import Product from "../components/product"

const ProductTemplate = ({ data }) => {
  const { title, description, priceRange } = data.shopifyProduct

  return (
    <ToastProvider>
      <Product
        product={data.shopifyProduct}
        title={title}
        description={description}
        priceRange={priceRange}
      />
    </ToastProvider>
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
