import DialogModal from "@/components/Dialog";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import CartItem from "./CartItems";
import CustomButton from "@/components/overrides/Button";

import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  Container,
} from "@mui/material";

const ShopCart = ({ modalRef }) => {
  const { cartQuantity, cartItems } = useShoppingCart();
  console.log(cartItems);
  return (
    <DialogModal ref={modalRef} title={`Your bag (${cartQuantity})`}>
      <DialogContent>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </DialogContent>
      <DialogActions
        sx={{ display: "block", py: 2, borderTop: "1px solid lightgrey" }}
      >
        <Container maxWidth="sm">
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography>Total:</Typography>
            <Typography>
              $
              {cartItems.reduce((total, cartItem) => {
                return (
                  total + (cartItem.product?.price || 0) * cartItem.quantity
                );
              }, 0)}
            </Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography color="gray">Shipping:</Typography>
            <Typography color="gray">Free</Typography>
          </Stack>
          <CustomButton fullWidth sx={{ py: 1, mt: 3 }}>
            go to checkout
          </CustomButton>
        </Container>
      </DialogActions>
    </DialogModal>
  );
};

export default ShopCart;
