import React from 'react';
import { GrClose } from 'react-icons/gr';

const Modal = (props) => {
  const { closeModal, children } = props;
  return (
    <>
      <div className='modal-bg'>
        <div className='center-content'>
          <div className='container text-center'>
            <div className='close-modal fs-1' onClick={() => closeModal()}>
              <GrClose />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
