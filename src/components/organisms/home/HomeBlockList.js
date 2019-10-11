import React                  from 'react';
import BlogBlock              from '../../molecules/BlogBlock';
import CaseStudyBlock         from '../../molecules/CaseStudyBlock';
import Paragraph              from '../../atoms/Paragraph';
import SquiggleBrushImage     from "../../../img/home-collage_squigglebrush@2x.png";
import SirachBrushImage       from "../../../img/home-collage_siracha_brush@2x.png";
import ScribbleImage          from "../../../img/home-collage_scribble@2x.png";

const HomeBlockList = () => (
  <div className="c-home-block-list">
    <div className="c-home-block-list__column">
      <BlogBlock
        imagePath = "/img/kids-discover_sm@2x.jpg"
        title     = "the risky business of delighting your users" />
      <img src={SquiggleBrushImage} alt="Squiggle Brush" className="c-brush__squiggle" />
      <Paragraph type="asterisk">
        designing the world around us
      </Paragraph>
      <BlogBlock
        imagePath = "/img/kids-discover_sm@2x.jpg"
        title     = "the risky business of delighting your users" />
    </div>
    <div className="c-home-block-list__column">
      <CaseStudyBlock
        imagePath = "/img/hackerone_sm@2x.jpg"
        logoPath  = "/img/hackerone_logo@2x.png"
        tags      = {["digital", "event", "marketing"]} />
      <CaseStudyBlock
        imagePath = "/img/hackerone_sm@2x.jpg"
        logoPath  = "/img/hackerone_logo@2x.png"
        tags      = {["digital", "event", "marketing"]} />
      <img src={ScribbleImage} alt="Scribble" className="c-brush__scribble" />
    </div>
    <div className="c-home-block-list__column">
      <img src={SirachBrushImage} alt="Siracha Brush Image" className="c-brush__siracha" />
      <CaseStudyBlock 
        imagePath = "/img/kids-discover_sm@2x.jpg"
        logoPath  = "/img/kids-discover_logo@2x.png"
        tags      = {["ux", "product", "development"]} />
      <BlogBlock
        imagePath = "/img/kids-discover_sm@2x.jpg"
        title     = "the risky business of delighting your users" />
      <Paragraph type="asterisk">
        one experience at a time.
      </Paragraph>
    </div>
  </div>
);

export default HomeBlockList;
