import React from 'react';
import BlogBlock from '../molecules/BlogBlock';
import CaseStudyBlock from '../molecules/CaseStudyBlock';
import Paragraph from '../atoms/Paragraph';

const HomeBlockList = () => (
  <div className="c-home-block-list">
    <div className="c-home-block-list__column">
      <BlogBlock
        imagePath = "/img/kids-discover_sm@2x.jpg"
        title     = "the risky business of delighting your users" />
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
    </div>
    <div className="c-home-block-list__column">
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
