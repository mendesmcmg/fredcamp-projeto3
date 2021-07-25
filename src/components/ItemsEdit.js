import { IconButton, Modal, SvgIcon, Fade, Backdrop } from "@material-ui/core";
import { useState } from "react";
import modalStyle from "../utils/modalStyle";

function EditButton() {
  const [open, setOpen] = useState(false);
  const classes = modalStyle();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        type="button"
        aria-label="edit"
        style={{ float: "right" }}
        onClick={handleOpen}
      >
        <SvgIcon>
          <path
            fill="currentColor"
            d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z"
          />
        </SvgIcon>
        <span style={{ fontSize: 22, marginLeft: 5 }}>Edit</span>
      </IconButton>

      <Modal
        className={classes.modal}
        aria-labelledby="edit-modal"
        aria-describedby="modal-for-post-editing"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1>opened</h1>

            
            <IconButton
              aria-label="save-edit"
              style={{ float: "right" }}
              onClick={handleClose}
            >
              <SvgIcon>
                <path
                  fill="currentColor"
                  d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
                />
              </SvgIcon>
              <span style={{ fontSize: 22, marginLeft: 5 }}>Save</span>
            </IconButton>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default EditButton;
