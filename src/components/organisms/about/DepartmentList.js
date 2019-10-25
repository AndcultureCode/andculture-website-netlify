import React from "react";
import DepartmentBlock from "./DepartmentBlock";
import GeometricBlock from "../../../img/about-geometric-block@2x.png";
import AndFreshCircle from "../../../img/home-collage_fresh_brush@2x.png";
import VioletStrokedSquare from "../../../img/about-violet_stroked square@2x.png";
import CenterLaneScribbles from "../../../img/about-center-lane_scribbles@2x.png";
import StickyNoteBrushSquares from "../../../img/about-sticky-note_brush-squares@2x.png";

const DepartmentList = () => (
  <div className="c-about-department-list">
    <h2>how do you do what you do?</h2>
    <div className="c-about-department-list__item">
      <img src={GeometricBlock} className="c-about-department-list__geometric-block" />
      <DepartmentBlock
        name    = { "Strategy" }
        items   = { ["Discovery and Research", "Data analysis", "Content and Marketing"] }
        content = { "“Why?” That’s what our Strategy team intends to find out, right from Discovery on through site and content development. We dig deep to get to the “Why?” behind your team’s stated problem. We don’t assume an answer. But we’re ready to use data and expertise to explore solutions." } />
    </div>
    <div className="c-about-department-list__item">
      <DepartmentBlock
        name    = { "Design" }
        items   = { ["Product design", "Web design", "Event design"] }
        content = { "From revamping a website to creating the aesthetics for a massive live event from scratch, our design team is up to the challenge. We value pushing each other creatively with a passion that borders on relentless. The result: your brand hits new levels." } />
    </div>
    <div className="c-about-department-list__item">
      <img src={AndFreshCircle} className="c-about-department-list__fresh-circle" />
      <img src={VioletStrokedSquare} className="c-about-department-list__violet-square" />
      <DepartmentBlock
        name    = { "Engineering" }
        items   = { ["App development", "Software design", "Client-side applications"] }
        content = { "Using Agile as our base, we work collaboratively with you to think beyond the obvious and deliver design thinking - it’s what has helped us come up with entirely new platforms out of thin air. You’re working with developers who live for this every day." } />
      <img src={CenterLaneScribbles} className="c-about-department-list__scribbles" />
      <img src={StickyNoteBrushSquares} className="c-about-department-list__brush-squares" />
    </div>
    <div className="c-about-department-list__item">
      <DepartmentBlock
        name    = { "Engagement" }
        items   = { ["Client advising", "Project managing", "Business development"] }
        content = { "Organizing and understanding the nuances of a project can seem overwhelming. Our experienced engagement team works alongside you so you’re up to date as much as you want to be, from project updates to advising on your behalf in meetings so that your best interests are always represented in our designs." } />
    </div>
  </div>

);
export default DepartmentList;