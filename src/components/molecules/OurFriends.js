import React from 'react';
import Paragraph from '../atoms/Paragraph';
import AdaptivePathLogo from '../../img/&C_Home_Release1_1X/client_adaptivpath.png';
import BenjaminMooreLogo from '../../img/&C_Home_Release1_1X/benmoore.png';
import MayoClinicLogo from '../../img/&C_Home_Release1_1X/client_Mayo-clinic.png';
import ChickFilALogo from '../../img/&C_Home_Release1_1X/client_chikfila.png';
import CaptricityLogo from '../../img/&C_Home_Release1_1X/client_hackerone.png';
import PennStateLogo from '../../img/&C_Home_Release1_1X/client_PennState.png';
import SheetzLogo from '../../img/&C_Home_Release1_1X/client_sheetz.png';
import PRGLogo from '../../img/&C_Home_Release1_1X/client_PRG.png';
import NeighborWorksLogo from '../../img/&C_Home_Release1_1X/client_neighborworks.png';
import HybridLearningInstituteLogo from '../../img/&C_Home_Release1_1X/client_hybrid-learning.png';

const logoDivClass = "c-our-friends__wrapper__logos-container__logo";

const OurFriends = () => (
  <div className="c-our-friends">
    <div className="c-our-friends__wrapper">
      <Paragraph cssClassName="c-our-friends__wrapper__label">Some of our other friends</Paragraph>
      <div className="c-our-friends__wrapper__logos-container">
        <div className={logoDivClass}>
          <img src={AdaptivePathLogo} alt="Adaptive Path"/>
        </div>
        <div className={logoDivClass}>
          <img src={BenjaminMooreLogo} alt="Benjamin Moore"/>
        </div>
        <div className={logoDivClass}>
          <img src={MayoClinicLogo} alt="Mayo Clinic"/>
        </div>
        <div className={logoDivClass}>
          <img src={ChickFilALogo} alt="Chick-Fil-A"/>
        </div>
        <div className={logoDivClass}>
          <img src={CaptricityLogo} alt="Captricity"/>
        </div>
      </div>
      <div className="c-our-friends__wrapper__logos-container">
        <div className={logoDivClass}>
          <img src={PennStateLogo} alt="PennState"/>
        </div>
        <div className={logoDivClass}>
          <img src={SheetzLogo} alt="Sheetz"/>
        </div>
        <div className={logoDivClass}>
          <img src={PRGLogo} alt="PRG"/>
        </div>
        <div className={logoDivClass}>
          <img src={NeighborWorksLogo} alt="NeighborWorks"/>
        </div>
        <div className={logoDivClass}>
          <img src={HybridLearningInstituteLogo} alt="Hybrid Learning Institute"/>
        </div>
      </div>
    </div>
  </div>
);

export default OurFriends
