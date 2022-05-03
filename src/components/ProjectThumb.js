import React from 'react';

const ProjectThumb = (props) => {
  const { id, title, img, type, handleModal } = props;
  return (
    <div>
      <div
        className='project-thumb fs-4 m-3 d-flex flex-column align-items-center'
        onClick={() => handleModal(id)}
      >
        <img
          loading='lazy'
          src={img.threeDevices}
          alt={title}
          className='project-img project-thumbnail mt-3 mb-3'
        />
        <p className='h3 font-sans fw-bold mb-0'>{title}</p>
        <p className='lead'>{type}</p>
      </div>
    </div>
  );
};

export default ProjectThumb;
