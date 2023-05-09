import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// import Button from "@mui/material/Button";
import Button from "@/components/overrides/Button";

const ProductPage = ({ product }) => {
  const { image, title, description, price } = product;
  return (
    <>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={2}>
          <img
            src={image}
            // style={{ objectFit: "contain" }}
            width={"300rem"}
            // height={200}
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
        <Button fullWidth sx={{ my: 3, py: 2 }}>
          Add To Bag
        </Button>
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
