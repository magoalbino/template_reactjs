import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactNode } from "react";
import { BotaoPadrao } from "../../Formulario/BotaoPadrao";

interface ModalPadraoProps {
  open: boolean;
  onClose: () => void;
  title: string | ReactNode;
  content: ReactNode;
  isLoading?: boolean;
  actions?: ReactNode;
  confirmButtonText?: string;
  handleConfirm?: () => void;
  handleCancel?: () => void;
}

export function ModalPadrao({
  open,
  onClose,
  title,
  content,
  isLoading,
  actions,
  confirmButtonText,
  handleConfirm,
  handleCancel,
}: ModalPadraoProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth keepMounted>
      <DialogTitle>
        <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
        <IconButton
          sx={{
            position: "absolute",
            borer: 0,
            right: 1.5,
            top: 1.5,
          }}
          size="small"
          color="default"
          aria-label="Fechar"
          onClick={onClose}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions sx={{ margin: "0 16px 16px 16px" }}>
        {actions || (
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="flex-end"
          >
            <BotaoPadrao
              onClick={() => {
                onClose();
                if (handleCancel) {
                  handleCancel();
                }
              }}
              variant="outlined"
            >
              Cancelar
            </BotaoPadrao>
            <BotaoPadrao
              variant="contained"
              onClick={handleConfirm}
              loading={isLoading}
            >
              {confirmButtonText ?? "Confirmar"}
            </BotaoPadrao>
          </Grid>
        )}
      </DialogActions>
    </Dialog>
  );

  /*return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={open}>
        <Box
          sx={{
            maxHeight: "70%",
            maxWidth: "90%",
            bgcolor: "background.default",
            py: 2,
            px: 3,
            position: "relative",
            border: "1px solid #D4D4D4",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
            boxSizing: "border-box",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          {content}
          {actions}
        </Box>
      </Fade>
    </Modal>
  );*/
}
