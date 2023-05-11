import { useShoppingCart } from '@/context/ShoppingCartContext';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CustomButton from '@/components/overrides/Button';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItems = ({ id, quantity, product }) => {
  const { image, title, price } = product;
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src={image} alt={title} width={'50'} height={'50'} />
        <Box>
          <Typography
            variant="subtitle2"
            noWrap
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '11rem',
            }}
          >
            {title}
          </Typography>
          <Typography variant="caption" color="gray">
            Qty: {quantity}
          </Typography>
          <Stack flexDirection="row" mt={3} mb={1}>
            <CustomButton
              onClick={() => decreaseCartQuantity(product)}
              sx={{ width: 20, minWidth: 'unset', height: 20, mr: 1 }}
            >
              -
            </CustomButton>
            <CustomButton
              onClick={() => increaseCartQuantity(product)}
              sx={{ width: 20, minWidth: 'unset', height: 20 }}
            >
              +
            </CustomButton>
          </Stack>
        </Box>

        <Box sx={{ textAlign: 'right' }}>
          <Typography>${price}</Typography>

          <IconButton
            aria-label="delete"
            color="default"
            onClick={() => removeFromCart(id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Stack>
    </>
  );
};

export default CartItems;
