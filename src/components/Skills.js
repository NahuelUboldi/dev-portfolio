import React from 'react';
import logos from '../data/logosData';
import SkillsMap from './micro/SkillsMap';
import SectionTitles from './micro/SectionTitles';

function Skills() {
  const skillsThatIKnow = logos.filter((item) => item.doKnowIt === true);
  const coreSkills = skillsThatIKnow.filter((item) => item.use === 'core');
  const animationSkills = skillsThatIKnow.filter(
    (item) => item.use === 'animation'
  );
  const libraryAndFrameworkSkills = skillsThatIKnow.filter(
    (item) => item.use === 'libraries and frameworks'
  );
  const otherToolsSkills = skillsThatIKnow.filter(
    (item) => item.use === 'other tools'
  );

  return (
    <section id='skills'>
      <div className='container d-flex flex-column align-items-center'>
        <SectionTitles
          title={'Skills'}
          subtitle={'Developer skills and tools.'}
        />
        <div className='row'>
          <div className='col-12'>
            <div className='icons text-center d-flex flex-column'>
              <SkillsMap skillType={coreSkills} title={'Core technologies'} />
              <SkillsMap
                skillType={libraryAndFrameworkSkills}
                title={'Libraries and frameworks'}
              />
              <SkillsMap
                skillType={animationSkills}
                title={'Animation libraries'}
              />
              <SkillsMap skillType={otherToolsSkills} title={'Other tools'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
