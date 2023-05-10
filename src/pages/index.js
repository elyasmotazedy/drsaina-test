import Link from "next/link";
import SEO from "@/components/SEO";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Home({ productList }) {
  return (
    <>
      <SEO title="Dr Saina test" description="this is test task for Dr saina" />
      <Container maxWidth="sm">
        <Grid container spacing={2} sx={{ my: 3 }}>
          {productList &&
            productList.map(({ id, image, title, price }) => (
              <Grid item xs={6} sm={6} key={id}>
                <Link href={`/product/${encodeURIComponent(id)}`}>
                  <Card sx={{ maxWidth: 345 }} variant="outlined">
                    <CardMedia
                      component="img"
                      src={image}
                      height={"250rem"}
                      alt={title}
                      sx={{ objectFit: "contain", p: 1 }}
                    />
                    <CardContent>
                      <Stack justifyContent="space-between" flexDirection="row">
                        <Box
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            width: "11rem",
                          }}
                        >
                          <Typography noWrap>{title}</Typography>
                        </Box>
                        <Box>
                          <Typography>${price}</Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export const getServerSideProps = async () => {
  const productListRes = await fetch("https://fakestoreapi.com/products");
  const productList = await productListRes.json();
  return {
    props: {
      productList,
    },
  };
};
