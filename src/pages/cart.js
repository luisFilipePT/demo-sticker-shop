import React, { useState } from "react"
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
    setCart([])
    clearBasket()
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
