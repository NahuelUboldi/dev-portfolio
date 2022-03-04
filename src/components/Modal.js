import React from 'react';
import {motion} from "framer-motion"
import { GrClose } from 'react-icons/gr';


const Modal = (props) => {
  const { setIsModalOpen, children } = props;
  return (
    
      <motion.div 
 
      className='modal-bg'
      initial={{opacity:0,x:100}}
      animate={{opacity:1,x:0}}
      exit={{opacity:0,x:100,transition:{duration:0.8}}}
      transition={{duration:0.8}}
      >
        
        <div className='center-content'>
          <div className='container text-center'>
            <div className='close-modal fs-1' onClick={() => setIsModalOpen(false)}>
              <GrClose />
            </div>
            {children}
          </div>
        </div>
      </motion.div>
    
  );
};

export default Modal;
