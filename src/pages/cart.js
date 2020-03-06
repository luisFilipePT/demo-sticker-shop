import React, { useState } from "react"
import Client from "shopify-buy"
import { Grid, Box, Heading, Message, Button } from "theme-ui"
import Layout from "../components/layout"
import { getBasket, clearBasket } from "../utils"

const Cart = () => {
  const [cart, setCart] = useState(getBasket())
  console.log(cart)

  const getTotal = () => {
    return cart.reduce(
      (acc, item) => (acc += Number(item.priceRange.minVariantPrice.amount)),
      0
    )
  }

  const checkout = () => {
    const client = Client.buildClient({
      domain: "demo-socks-shop.myshopify.com",
      storefrontAccessToken: process.env.SHOPIFY_API_KEY,
    })

    client.checkout.create().then(checkout => {
      // Do something with the checkout

      const lineItemsToAdd = [
        {
          variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ5Njg5MjA1MTU5Ng==",
          quantity: 1,
        },
      ]
      console.log(checkout)
      client.checkout
        .addLineItems(checkout.id, lineItemsToAdd)
        .then(checkout => {
          // Do something with the updated checkout
          console.log('final checkout', checkout) // Array with one additional line item
          console.log('final checkout', checkout.webUrl) // Array with one additional line item
              setCart([])
              clearBasket()
          window.open(checkout.webUrl)
        })
    })

    console.log(client)
    // setCart([])
    // clearBasket()
    // window.open(checkout.webUrl)
  }

  return (
    <Layout>
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
              <Button variant="primary" onClick={() => checkout()}>
                Checkout now
              </Button>
            </Box>
          </Grid>
        </Message>
      )}
      {cart.length === 0 && (
        <Message variant="error" my={40}>
          <Heading variant="styles.h1">No stickers to checkout!!</Heading>
        </Message>
      )}
    </Layout>
  )
}

export default Cart
