import { forwardRef, useState, useImperativeHandle, useCallback } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const DialogModal = forwardRef(function ConfirmDialog(props, ref) {
  const {
    onClose,
    onConfirm,
    noHeader = false,
    fullScreen = true,
    title,
    children,
    ...other
  } = props;
  const [state, setState] = useState({ open: false });
  const handleClose = useHandleClose(setState, onClose);
  const handleConfirm = useHandleConfirm(setState, onConfirm);
  console.log("ch", children);
  useImperativeHandle(ref, () => ({
    open() {
      setState({ open: true });
    },
  }));

  return (
    <Dialog
      open={state.open}
      onClose={handleClose}
      fullScreen={fullScreen}
      {...other}
    >
      {/* {!noHeader && <DialogTitle>{title}</DialogTitle>} */}
      {/* <DialogContent>{children}</DialogContent> */}
      {children}
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm}>OK</Button>
      </DialogActions>
    </Dialog>
  );
});

function useHandleClose(setState, handleClose) {
  return useCallback(function (event, reason) {
    setState({ open: false });
    handleClose?.(event, reason ?? "backdropClick");
  }, []);
}

function useHandleConfirm(setState, handleConfirm) {
  return useCallback(async function () {
    await handleConfirm?.();
    setState({ open: false });
  }, []);
}

export default DialogModal;
