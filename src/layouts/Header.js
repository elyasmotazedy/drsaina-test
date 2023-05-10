import { useRef, useCallback } from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";

import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShopCart from "@/components/ShopCart";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Link from "next/link";

const Header = () => {
  const { cartQuantity } = useShoppingCart();

  const dialogRef = useRef(null);
  const handleOpen = useCallback(() => dialogRef.current?.show(), []);

  return (
    <CustomAppBar position="static" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton size="small" edge="start" aria-label="open drawer">
          <MenuIcon sx={{ color: "#000" }} />
        </IconButton>
        <Link href="/">
          <Typography
            variant="h5"
            sx={{ flex: 1 }}
            align="center"
            color="black"
          >
            Dr Saina
          </Typography>
        </Link>

        <Box>
          <IconButton size="small" aria-label="search products">
            <SearchIcon sx={{ color: "#000" }} />
          </IconButton>
          <IconButton size="small" aria-label="shop cart" onClick={handleOpen}>
            <Badge badgeContent={cartQuantity} color="error">
              <ShoppingBagIcon sx={{ color: "#000" }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
      <ShopCart modalRef={dialogRef} />
    </CustomAppBar>
  );
};

const CustomAppBar = styled(AppBar)(() => ({
  background: "#fff",
  borderBottom: "1px solid #e8e8e8",
}));

export default Header;
