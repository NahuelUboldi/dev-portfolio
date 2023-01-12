import React, { useRef, useEffect } from 'react';
import { Container, Stage, Sprite, withFilters } from '@inlet/react-pixi';
import img3d from '../img/bg/image.png';
import depthMap from '../img/bg/shadow.png';
import { DisplacementFilter } from '@pixi/filter-displacement';

const Filters = withFilters(Container, {
  displacement: DisplacementFilter,
});

function HeroImg3D() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const displacementSpriteRef = useRef();
  // const [renderFilter, setRenderFilter] = useState(false);

  useEffect(() => {
    // setRenderFilter(true);
  }, []);

  return (
    <Stage
      width={windowSize.current[0]}
      height={windowSize.current[1]}
      options={{ backgroundColor: '#fff' }}
    >
      <Container position={[250, 250]}>
        <Sprite
          image={depthMap}
          width={windowSize.current[0]}
          height={windowSize.current[1]}
          ref={displacementSpriteRef}
        />
        <Filters
          displacement={{
            construct: [displacementSpriteRef],
            scale: { x: 30, y: 60 },
          }}
        >
          <Sprite
            image={img3d}
            width={windowSize.current[0]}
            height={windowSize.current[1]}
          />
        </Filters>
      </Container>
    </Stage>
  );
}

export default HeroImg3D;
