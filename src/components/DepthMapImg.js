import React from 'react';
import ImageDepthMap from 'react-depth-map';
import guy from '../img/bg/image.png';
import depthMap from '../img/bg/depthmap.png';

function DepthMapImg() {
  return (
    <ImageDepthMap
      originalImg={guy}
      depthImg={depthMap}
      verticalThreshold={25}
      horizontalThreshold={25}
    />
  );
}

export default DepthMapImg;
