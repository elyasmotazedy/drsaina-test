import DialogModal from "@/components/Dialog";
import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const ShopCart = ({ modalRef, id }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const deleteHandler = async () => {
    setDeleteLoading(true);
    const { successful } = await deleteAddresses(id);
    if (successful) {
      dispatch(getUserAddresses());
    } else {
      alert("Err");
    }
    setDeleteLoading(false);
  };
  return (
    <DialogModal ref={modalRef} noHeader>
      <DialogTitle id="confirm-dialog" sx={{ textAlign: "center" }}>
        حذف آدرس
      </DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        {" "}
        آیا از حذف آدرس مطمئن هستید؟
      </DialogContent>

      <DialogActions dir="rtl" sx={{ justifyContent: "center", pb: 2 }}>
        {deleteLoading ? (
          <Button variant="text" color="primary">
            <CircularProgress size={15} />
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              deleteHandler();
            }}
            color="error"
          >
            بله
          </Button>
        )}
        <Button
          variant="text"
          onClick={() => {
            modalRef.current.hide();
          }}
          color="secondary"
        >
          انصراف
        </Button>
      </DialogActions>
    </DialogModal>
  );
};

export default ShopCart;
