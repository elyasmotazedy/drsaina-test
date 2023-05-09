import { useState, forwardRef, useImperativeHandle, useCallback } from "react";

import {
  Box,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Stack,
} from "@mui/material";
import Grow from "@mui/material/Grow";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const DialogModal = forwardRef(
  (
    {
      children,
      fullScreen = true,
      maxWidth = "xs",
      dialogContentStyle,
      title,
      onClosed,
      noHeader = false,
    },
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      show: () => setOpen(true),
      hide: () => setOpen(false),
    }));

    const theme = useTheme();
    const fullScreenMode = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, setOpen] = useState(false);
    const handleClose = useCallback(
      (e, reason) => {
        if (!canClose) {
          return;
        }
        const ignoreClose = !backdropClose;
        if (ignoreClose && reason && reason === "backdropClick") return;
        setOpen(false);
        if (typeof onClosed === "function") {
          setTimeout(() => {
            onClosed();
          }, 200);
        }
      },
      [backdropClose, canClose, onClosed]
    );

    return (
      <Dialog
        //ref={ref}
        scroll="body"
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen && fullScreenMode}
        fullWidth={true}
        maxWidth={maxWidth}
        //keepMounted
        TransitionComponent={Transition}
        sx={{ ".MuiPaper-root ": { overflowY: "unset" } }}
      >
        {!noHeader && canClose ? (
          <CustomDialogTitle onClose={handleClose}>
            <Typography
              component="h3"
              variant="h5"
              align="center"
              sx={{ width: "100%" }}
            >
              {title}
            </Typography>
          </CustomDialogTitle>
        ) : null}
        <DialogContent sx={{ ...dialogContentStyle, overflowY: "unset" }}>
          {children}
        </DialogContent>
      </Dialog>
    );
  }
);

const Transition = forwardRef(
  (props, ref) => (
    <Grow
      //style={{ transformOrigin: '50% 50% 50%' }}
      ref={ref}
      {...props}
      {...(props.in ? { timeout: 300 } : {})}
      //timeout={2000}
    />
  )
  //return <Zoom timeout={500} ref={ref} {...props} />;
  //return <Fade timeout={500} ref={ref} {...props} />;
);

Transition.displayName = "Transition";

function CustomDialogTitle(props) {
  const { children, onClose, ...other } = props;

  const theme = useTheme();

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 1,
        borderBottom: `1px solid ${theme.palette.border}`,
        //direction: 'rtl'
      }}
      {...other}
    >
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            <Box sx={{}}>&times;</Box>
          </IconButton>
        ) : null}
      </Stack>
    </DialogTitle>
  );
}

DialogModal.displayName = "DialogModal";
export default DialogModal;
