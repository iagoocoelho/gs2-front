import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.scss";

let initial = {
  title: "Título Exemplo",
  hasClose: true,
  hasSave: true,
  btnSaveName: "Salvar",
  callback: () => false,
  disabled: false,
};

export const ModalComponent = ({ data = initial, children, setShow, show }) => {
  const handleClose = () => {
    if (data.callback) {
      data.callback();
    }
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton={data.hasClose}>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {data.hasSave && (
          <Modal.Footer>
            <Button
              variant="primary"
              disabled={data.disabled}
              onClick={handleClose}
            >
              {data.btnSaveName}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default ModalComponent;
