import React from 'react';
import { Modal } from 'react-bootstrap';

/**
 * 
 * @param {string} size 
 * @param {boolean} show 
 * @param {Function} handleClose 
 * @param {children} children 
 * @returns SimplModal
 */
const SimpleModal = ({ size, show, handleClose, children }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size={size}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <button className="model-close-btn" onClick={() => handleClose()}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
                {
                    children
                }
            </Modal.Body>
        </Modal>
    );
};

export default SimpleModal;