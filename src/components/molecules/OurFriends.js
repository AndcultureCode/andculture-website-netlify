import React                          from 'react';
import Paragraph                      from '../atoms/Paragraph';
import AdaptivePathLogo               from '../../img/clients/client_adaptivpath.png';
import AdaptivePathLogo2x             from '../../img/clients/client_adaptivpath@2x.png';
import BenjaminMooreLogo              from '../../img/clients/client_benmoore.png';
import BenjaminMooreLogo2x            from '../../img/clients/client_benmoore@2x.png';
import CaptricityLogo                 from '../../img/clients/client_captricity.png';
import CaptricityLogo2x               from '../../img/clients/client_captricity@2x.png';
import CCALogo                        from '../../img/clients/client_cca.png';
import CCALogo2x                      from '../../img/clients/client_cca@2x.png';
import MayoClinicLogo                 from '../../img/clients/client_mayo-clinic.png';
import MayoClinicLogo2x               from '../../img/clients/client_mayo-clinic@2x.png';
import ChickFilALogo                  from '../../img/clients/client_chikfila.png';
import ChickFilALogo2x                from '../../img/clients/client_chikfila@2x.png';
import HackerOneLogo                  from '../../img/clients/client_hackerone.png';
import HackerOneLogo2x                from '../../img/clients/client_hackerone@2x.png';
import PennStateLogo                  from '../../img/clients/client_pennstate.png';
import PennStateLogo2x                from '../../img/clients/client_pennstate@2x.png';
import PinnacleLogo                   from '../../img/clients/client_pinnacle.png';
import PinnacleLogo2x                 from '../../img/clients/client_pinnacle@2x.png';
import SheetzLogo                     from '../../img/clients/client_sheetz.png';
import SheetzLogo2x                   from '../../img/clients/client_sheetz@2x.png';
import PRGLogo                        from '../../img/clients/client_prg.png';
import PRGLogo2x                      from '../../img/clients/client_prg@2x.png';
import NeighborWorksLogo              from '../../img/clients/client_neighborworks.png';
import NeighborWorksLogo2x            from '../../img/clients/client_neighborworks@2x.png';
import HybridLearningInstituteLogo    from '../../img/clients/client_hybrid-learning.png';
import HybridLearningInstituteLogo2x  from '../../img/clients/client_hybrid-learning@2x.png';

const logoDivClass = "c-our-friends__wrapper__logos-container__logo";

const OurFriends = () => (
  <div className="c-our-friends" id="work">
    <div className="c-our-friends__wrapper">
      <Paragraph cssClassName="c-our-friends__wrapper__label">Some of our friends</Paragraph>
      <div className="c-our-friends__wrapper__logos-container">
        {/* <div className={logoDivClass}>
          <img src={AdaptivePathLogo} srcSet={`${AdaptivePathLogo} 1x, ${AdaptivePathLogo2x} 2x`} alt="Adaptive Path"/>
        </div> */}
        <div className={logoDivClass}>
          <img src={BenjaminMooreLogo} srcSet={`${BenjaminMooreLogo} 1x, ${BenjaminMooreLogo2x} 2x`} alt="Benjamin Moore"/>
        </div>
        <div className={logoDivClass}>
          <img src={ChickFilALogo} srcSet={`${ChickFilALogo} 1x, ${ChickFilALogo2x} 2x`} alt="Chick-Fil-A"/>
        </div>
        <div className={logoDivClass}>
          <img src={CCALogo} srcSet={`${CCALogo} 1x, ${CCALogo2x} 2x`} alt="CCA"/>
        </div>
        <div className={logoDivClass}>
          <img src={MayoClinicLogo} srcSet={`${MayoClinicLogo} 1x, ${MayoClinicLogo2x} 2x`} alt="Mayo Clinic"/>
        </div>
        <div className={logoDivClass}>
          <img src={PinnacleLogo} srcSet={`${PinnacleLogo} 1x, ${PinnacleLogo2x} 2x`} alt="UPMC Pinnacle"/>
        </div>
        <div className={logoDivClass}>
          <img src={PRGLogo} srcSet={`${PRGLogo} 1x, ${PRGLogo2x} 2x`} alt="PRG"/>
        </div>
        <div className={logoDivClass}>
          <img src={PennStateLogo} srcSet={`${PennStateLogo} 1x, ${PennStateLogo2x} 2x`} alt="PennState"/>
        </div>
        <div className={logoDivClass}>
          <img src={CaptricityLogo} srcSet={`${CaptricityLogo} 1x, ${CaptricityLogo2x} 2x`} alt="Captricity"/>
        </div>
        <div className={logoDivClass}>
          <img src={HackerOneLogo} srcSet={`${HackerOneLogo} 1x, ${HackerOneLogo2x} 2x`} alt="Captricity"/>
        </div>
        {/* <div className={logoDivClass}>
          <img src={SheetzLogo} srcSet={`${SheetzLogo} 1x, ${SheetzLogo2x} 2x`} alt="Sheetz"/>
        </div>
        <div className={logoDivClass}>
          <img src={NeighborWorksLogo} srcSet={`${NeighborWorksLogo} 1x, ${NeighborWorksLogo2x} 2x`} alt="NeighborWorks"/>
        </div>
        <div className={logoDivClass}>
          <img src={HybridLearningInstituteLogo} srcSet={`${HybridLearningInstituteLogo} 1x, ${HybridLearningInstituteLogo2x} 2x`} alt="Hybrid Learning Institute"/>
        </div> */}
      </div>
    </div>
  </div>
);

export default OurFriends
