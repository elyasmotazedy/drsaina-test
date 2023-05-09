import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <CustomFooter>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="button" color="black">
              custom Care
            </Typography>
            <Row text="FAQS" />
            <Row text="Orders & Returns" />
            <Row text="Account" />
            <Row text="AboutUs" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="button" color="black">
              connect
            </Typography>
            <Row text="Instagram" />
            <Row text="Facebook" />
            <Row text="Twitter" />
          </Grid>
        </Grid>
      </Container>
    </CustomFooter>
  );
};

const Row = ({ text }) => {
  return (
    <Typography
      variant="subtitle2"
      color="GrayText"
      component="p"
      sx={{ my: 2 }}
    >
      {text}
    </Typography>
  );
};
const CustomFooter = styled(Box)(() => ({
  background: "#f7f7f7",
  borderBottom: "1px solid #e8e8e8",
  marginTop: 40,
  padding: "10px 0",
}));

export default Footer;
