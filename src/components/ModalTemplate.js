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



    /*

     return (
        <div className="modal fade" id={id} tabIndex="-1">
            <div className="modal-dialog bg-light rounded">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id={`${id}Label`} className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label={cancelText} />
                    </div>
                    <div className="modal-body">
                        <span>{body}</span>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id={`${id}Dismiss`} className="btn btn-secondary" data-bs-dismiss="modal">{cancelText}</button>
                        <button type="button" id={`${id}Confirm`} className={`btn btn-${confirmColor}`} onClick={() => {
                            setShow(false);
                            confirmFunction();
                        }}>{confirmText}</button>
                    </div>
                </div>
            </div>
        </div>
    );


    
            deleteModal.addEventListener('shown.bs.modal', function () {
                dismissButton.focus();
            });

    */
}


export default ModalTemplate;