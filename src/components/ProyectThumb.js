import React from 'react';

const ProyectThumb = (props) => {
  const { id, title, type, handleModal } = props;
  return (
    <div>
      <div
        className='proyect-thumb fs-4 mb-3'
        onClick={() => handleModal(id)}
      >{`${title} // ${type}`}</div>
    </div>
  );
};

export default ProyectThumb;
