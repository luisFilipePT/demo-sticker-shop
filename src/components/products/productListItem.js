import React from "react"
import { useToasts } from "react-toast-notifications"
import { Box, Button, Card, Grid, Heading, Image } from "theme-ui"
import { navigate } from "gatsby"
import { addProductToBasket } from "../../utils"

const ProductListItem = ({ product }) => {
  const { addToast } = useToasts()
  const { images } = product;
  const [image] = images;

  const addProduct = async () => {
    const result = await addProductToBasket(product);
    if (result.status === 'OK') {
      addToast('Product was added to basket!', { appearance: 'success' })
    }
  };

  return (
   <Card p={10}>
      <Grid columns={2}>
        <Box>
          <Image src={image.originalSrc} style={{ maxWidth: 150 }} />
        </Box>
        <Box p={10}>
          <Heading variant="styles.h2">{product.title}</Heading>
          <Heading variant="styles.h3">{product.description}</Heading>
          <Heading variant="styles.h4">
            {product.priceRange.minVariantPrice.amount == 0.0 ? 'Free' : `${product.priceRange.minVariantPrice.amount} €`}
          </Heading>
        </Box>
      </Grid>
      <Grid columns={2}>
        <Button onClick={() => navigate(`/product/${product.handle}`)}>
          Show Details
        </Button>
        <Button variant="secondary" onClick={addProduct}>
          Add to Cart
        </Button>
      </Grid>
    </Card>
  )
}

export default ProductListItem