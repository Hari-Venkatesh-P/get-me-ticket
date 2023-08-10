import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: 400,
  overflow: "scroll",
};

interface HVModalProps {
  modalTitle: string;
  modalDescription?: string;
  modalSecondaryDescription?: string;
  modalContentBuilder: () => JSX.Element;
  onModalClose: () => void;
}
export default function HVModal(props: HVModalProps) {
  const {
    modalTitle,
    modalDescription = "",
    modalSecondaryDescription = "",
    modalContentBuilder,
    onModalClose,
  } = props;
  return (
    <Modal
      open={true}
      onClose={onModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <React.Fragment>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          {modalDescription.length > 0 && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {modalDescription}
            </Typography>
          )}
          {modalSecondaryDescription.length > 0 && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {modalSecondaryDescription}
            </Typography>
          )}
          {modalContentBuilder()}
        </Box>
      </React.Fragment>
    </Modal>
  );
}
