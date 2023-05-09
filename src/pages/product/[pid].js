import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const ProductPage = ({ product }) => {
  const { image, title, description, price } = product;
  return (
    <>
      <img
        src={image}
        style={{ objectFit: "contain" }}
        width={"100%"}
        alt={title}
      />
      <Container maxWidth="sm">
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography>{title}</Typography>
          <Typography>${price}</Typography>
        </Stack>
        <Divider />
        <Button>Add To Bag</Button>
        <Typography>{description}</Typography>
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
