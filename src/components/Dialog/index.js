import { useState, forwardRef, useImperativeHandle, useCallback } from 'react';

import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  Typography,
  Stack,
  Container,
} from '@mui/material';
import Grow from '@mui/material/Grow';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const DialogModal = forwardRef(
  (
    {
      children,
      fullScreen = true,
      maxWidth = 'xs',
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
    const fullScreenMode = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = useState(false);
    const handleClose = useCallback(() => {
      setOpen(false);
      if (typeof onClosed === 'function') {
        setTimeout(() => {
          onClosed();
        }, 200);
      }
    }, [onClosed]);

    return (
      <Dialog
        scroll="paper"
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen && fullScreenMode}
        fullWidth={true}
        maxWidth={maxWidth}
        TransitionComponent={Transition}
      >
        {!noHeader ? (
          <CustomDialogTitle onClose={handleClose}>
            <Typography sx={{ width: '100%' }}>{title}</Typography>
          </CustomDialogTitle>
        ) : null}
        {children}
      </Dialog>
    );
  }
);

const Transition = forwardRef((props, ref) => (
  <Grow ref={ref} {...props} {...(props.in ? { timeout: 300 } : {})} />
));

Transition.displayName = 'Transition';

function CustomDialogTitle(props) {
  const { children, onClose, ...other } = props;

  const theme = useTheme();

  return (
    <Container maxWidth="sm">
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
    </Container>
  );
}

DialogModal.displayName = 'DialogModal';
export default DialogModal;
