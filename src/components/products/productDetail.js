import React from "react"
import Layout from "../intro/layout"
import { Heading, Box, Button, Grid, Image, Container } from "theme-ui"
import { useToasts } from "react-toast-notifications"
import { addProductToBasket } from "../../utils";

const ProductDetail = ({
  product,
  title,
  description,
  priceRange,
  images,
}) => {
  const { addToast } = useToasts()
  const [image] = images;

  const addProduct = async () => {
    const result = await addProductToBasket(product);
    if (result.status === 'OK') {
      addToast('Product was added to basket!', { appearance: 'success' })
    }
  };

  return (
    <Layout>
      <Grid columns={1} gap={30}>
        <Box sx={{ textAlign: "center"}}>
          <Image src={image.originalSrc} style={{ maxHeight: '45vh' }}/>
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
              onClick={addProduct}
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

export default ProductDetail
