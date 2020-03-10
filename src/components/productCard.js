import React from "react"
import { Box, Button, Card, Grid, Heading, Image } from "theme-ui"
import { navigate } from "gatsby"
import { addProductToBasket } from "../utils"

const ProductCard = ({ product }) => {
  return (
   <Card p={10}>
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

export default ProductCard