import React from 'react';
import Logo from './Logo';

const SkillsMap = (props) => {
  const { skillType, title } = props;

  return (
    <>
      <div className='fs-6 text-black-50 font-sans'>{title}</div>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {skillType.map((item) => (
          <Logo key={item.title} img={item.logoImg} text={item.text} />
        ))}
      </div>
    </>
  );
};

export default SkillsMap;
