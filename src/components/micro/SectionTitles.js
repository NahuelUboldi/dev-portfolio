import React from 'react';

const SectionTitles = ({ title, subtitle }) => {
  return (
    <>
      <span className='display-3'>{title}</span>
      <span className='subtitle h3 font-serif mb-5'>{subtitle}</span>
    </>
  );
};

export default SectionTitles;
