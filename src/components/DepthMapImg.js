import React from 'react';
import ImageDepthMap from 'react-depth-map';
import oldPc from '../img/bg/old-pc.png';
import depthMap from '../img/bg/old-pc-depth.png';

function DepthMapImg() {
  return (
    <ImageDepthMap
      originalImg={oldPc}
      depthImg={depthMap}
      verticalThreshold={25}
      horizontalThreshold={25}
    />
  );
}

export default DepthMapImg;
