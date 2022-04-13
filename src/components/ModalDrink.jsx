import React from 'react';
import {Modal, Image} from 'react-bootstrap';



export const ModalDrink = () => {

    const handleModalClick = () => {

    }

  return (
    <Modal show={true} onHide={handleModalClick} >
        <Modal.Body>
            CuerpoModal
        </Modal.Body>
    </Modal>
  )
}
