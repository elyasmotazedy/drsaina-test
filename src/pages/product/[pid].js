import SEO from "@/components/SEO";
import { useShoppingCart } from "@/context/ShoppingCartContext";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CustomButton from "@/components/overrides/Button";
import Image from "next/image";

const ProductPage = ({ product }) => {
  const { image, title, description, price, id } = product;

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <>
      <SEO title={title} description={description} image={image} />
      <Container maxWidth="sm">
        <Box textAlign="center" mt={2}>
          <Image
            src={image}
            style={{ objectFit: "contain" }}
            width={"300"}
            height={"300"}
            alt={title}
          />
        </Box>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{ py: 3 }}
        >
          <Typography>{title}</Typography>
          <Typography>${price}</Typography>
        </Stack>
        <Divider />
        {quantity === 0 ? (
          <CustomButton
            fullWidth
            sx={{ my: 3, py: 2 }}
            onClick={() => increaseCartQuantity(product)}
          >
            Add To Bag
          </CustomButton>
        ) : (
          <>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              mt={3}
              mb={1}
            >
              <CustomButton onClick={() => decreaseCartQuantity(id)}>
                -
              </CustomButton>
              <Typography>{quantity}</Typography>
              <CustomButton onClick={() => increaseCartQuantity(id)}>
                +
              </CustomButton>
            </Stack>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              onClick={() => removeFromCart(id)}
              sx={{ mb: 2 }}
            >
              remove
            </Button>
          </>
        )}

        <Typography variant="subtitle1" color="GrayText">
          {description}
        </Typography>
      </Container>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { pid } = query;
  const productListRes = await fetch(
    `https://fakestoreapi.com/products/${pid}`
  );
  const product = await productListRes.json();
  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
