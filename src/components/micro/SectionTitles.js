import React from 'react';

const SectionTitles = ({ title, subtitle }) => {
  return (
    <>
      <span className='title-text display-3'>{title}</span>
      <h2 className='subtitle h3 font-serif mb-5'>{subtitle}</h2>
    </>
  );
};

export default SectionTitles;
