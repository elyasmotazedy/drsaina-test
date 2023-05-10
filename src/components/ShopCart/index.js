import DialogModal from "@/components/Dialog";
import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const ShopCart = ({ modalRef }) => {
  return (
    <DialogModal ref={modalRef}>
      <DialogTitle>Your bag</DialogTitle>
      <DialogContent>یسببسیب</DialogContent>
    </DialogModal>
  );
};

export default ShopCart;
