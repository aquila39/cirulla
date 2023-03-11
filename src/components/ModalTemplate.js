import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalTemplate(props) {

    const { show, setShow, id, title, body, cancelText, confirmColor, confirmText, confirmFunction } = { ...props };


    return (
        <Modal id={id} show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    {cancelText}
                </Button>
                <Button variant={confirmColor} onClick={() => {
                    setShow(false);
                    confirmFunction();
                }}>
                    {confirmText}
                </Button>
            </Modal.Footer>
        </Modal >
    )
}


export default ModalTemplate;