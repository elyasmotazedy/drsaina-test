import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#000"),
  backgroundColor: "#000",
  borderRadius: 0,
  "&:hover": {
    backgroundColor: "#454444",
  },
}));

export default CustomButton;
