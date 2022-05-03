import React from 'react';
import './callToActionBtn-styles.css';
function CallToActionBtn({ text, href, targetBlank, secondary }) {
  let callToActionClassName = 'call-to-action-link';
  if (secondary) callToActionClassName = 'call-to-action-link__secondary';
  return (
    <div className='call-to-action-mask my-1 my-sm-0 mx-md-4 fs-5 font-serif'>
      <a
        target={targetBlank ? '_blank' : '_self'}
        rel={targetBlank ? 'nofollow noreferrer noopener' : ''}
        href={href}
        className={callToActionClassName}
      >
        {text}
      </a>
    </div>
  );
}

export default CallToActionBtn;
