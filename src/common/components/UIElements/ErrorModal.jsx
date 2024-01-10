import React from 'react';
import Button from '@mui/material/Button';
import Modal from '../UIElements/Modal';


const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button variant="outlined" onClick={props.onClear}>Entendido</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
