import React, { useState, useEffect } from "react"
import Client from "shopify-buy"
import { Grid, Box, Heading, Message, Button, Text } from "theme-ui"
import Layout from "../components/intro/layout"
import { getBasket, clearBasket } from "../utils"
import SEO from "../components/intro/seo"

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCart(getBasket);

    return () => setCart([])
  }, [])

  const getTotal = () => {
    return cart.reduce(
      (acc, item) => (acc += Number(item.priceRange.minVariantPrice.amount)),
      0
    )
  }

  const checkout = () => {
    const client = Client.buildClient({
      domain: `${process.env.GATSBY_SHOPIFY_SHOP_NAME}.myshopify.com`,
      storefrontAccessToken: process.env.GATSBY_SHOPIFY_API_KEY,
    })
    const lineItemsToAdd = cart.map(item => ({
      variantId: item.variants[0].id.replace("Shopify__ProductVariant__", ""),
      quantity: 1,
    }))

    client.checkout.create().then(checkout => {
      client.checkout
        .addLineItems(checkout.id, lineItemsToAdd)
        .then(checkout => {
          clearBasket()
          window.location.href = checkout.webUrl
        })
    })
  }

  return (
    <Layout>
      <SEO title="Cart" />
      <Heading variant="styles.h2">Cart</Heading>
      {cart.map(item => (
        <Message variant="primary" mb={4} key={item.shopifyId}>
          <Grid columns={2}>
            <Box>
              <Heading variant="styles.h3">{item.title}</Heading>
              <Heading variant="styles.h4">{item.description}</Heading>
            </Box>
            <Box sx={{ textAlign: "right", padding: 20 }}>
              <Heading variant="styles.h2">
                {item.priceRange.minVariantPrice.amount} €
              </Heading>
            </Box>
          </Grid>
        </Message>
      ))}
      {cart.length !== 0 && (
        <Message variant="success" mt={40}>
          <Grid columns={2}>
            <Box>
              <Heading variant="styles.h1">Total</Heading>
            </Box>
            <Box sx={{ textAlign: "right" }}>
              <Heading variant="styles.h1">{getTotal()} €</Heading>
              <Button variant="primary" onClick={checkout}>
                Checkout now
              </Button>
            </Box>
          </Grid>
        </Message>
      )}
      {cart.length === 0 && (
        <Message variant="error" my={40}>
          <Text>No stickers to checkout!!</Text>
        </Message>
      )}
    </Layout>
  )
}

export default Cart
