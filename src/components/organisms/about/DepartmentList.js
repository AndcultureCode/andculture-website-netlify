import React                  from "react";
import DepartmentBlock        from "./DepartmentBlock";
import BlueSwoosh             from "../../../img/about-blue-swoosh.png";
import X                      from "../../../img/about-x.png";
import SixDots                from "../../../img/about-six-dots.png";
import FogDot                 from "../../../img/about-fog-dot-pattern.png";
import GeometricBlock         from "../../../img/about-geometric-block-red.png";
import StickyNoteBrushSquares from "../../../img/about-sticky-note_brush-squares@2x.png";
import Go                     from "../../../img/about-go.png";
import Squiggle               from "../../../img/about-blue-squiggle.png";
import AlignLines             from "../../../img/about-align-lines.png";
import DoodleDots             from "../../../img/about-doodle-dots.png";
import DabDots                from "../../../img/about-dab-dots.png";
import Asterisk               from "../../../img/about-yellow-asterisk.png";
import RedBlob                from "../../../img/about-red-blob.png";
import BendyLines             from "../../../img/about-bendy-lines.png";
import Plant                  from "../../../img/about-plant.png";
import Triangle               from "../../../img/about-triangle.png";
import Rainbow                from "../../../img/about-sriracha-rainbow.png";
import HomeSubHeader          from '../../../components/organisms/home/HomeSubHeading';

const DepartmentList = () => (
  <div className={`c-about-department-list`} id="about">
    <HomeSubHeader />
    <div>
      {/* <h2>how do you do what you do?</h2> */}
      <div className="c-about-department-list__item">
        <img src = {GeometricBlock} className = "c-about-department-list__image -geometric-block" />
        <img src = {BlueSwoosh} className = "c-about-department-list__image -swoosh" />
        <img src = {X} className = "c-about-department-list__image -x" />
        <img src = {SixDots} className = "c-about-department-list__image -six-dots" />
        <img src = {FogDot} className = "c-about-department-list__image -fog-dot" />
        <DepartmentBlock
            name    = { "Strategy" }
            items   = { ["discovery and research", "data analysis", "content and marketing"] }
            content = { "“Why?” That’s what our Strategy team intends to find out, right from Discovery on through site and content development. We dig deep to get to the “Why?” behind your team’s stated problem. We don’t assume an answer. But we’re ready to use data and expertise to explore solutions." }
            isShort = { true } />
      </div>
      <div className="c-about-department-list__item">
      <img src = {Go} className = "c-about-department-list__image -go" />
      <img src = {Squiggle} className = "c-about-department-list__image -squiggle" />
      <img src = {AlignLines} className = "c-about-department-list__image -align-lines" />
      <img src = {DoodleDots} className = "c-about-department-list__image -doodle-dots" />
      <DepartmentBlock
          name       = { "Design" }
          items      = { ["product design", "web design", "event design"] }
          content    = { "From revamping a website to creating the aesthetics for a massive live event from scratch, our design team is up to the challenge. We value pushing each other creatively with a passion that borders on relentless. The result: your brand hits new levels." }
          alignRight = { true } />
      </div>
      <div className="c-about-department-list__item">
        <img src = {StickyNoteBrushSquares} className = "c-about-department-list__image -brush-squares" />
        <img src = {DabDots} className = "c-about-department-list__image -dab-dots" />
        <img src = {Asterisk} className = "c-about-department-list__image -asterisk" />
        <img src = {RedBlob} className = "c-about-department-list__image -red-blob" />
        <img src = {BendyLines} className = "c-about-department-list__image -bendy-lines" />
        <DepartmentBlock
            name    = {"Engineering"}
            items   = {["app development", "software design", "client-side application"]}
            content = {"Using Agile as our base, we work collaboratively with you to think beyond the obvious and deliver design thinking — it’s what has helped us come up with entirely new platforms out of thin air. You’re working with developers who live for this every day."} />
      </div>
      <div className="c-about-department-list__item">
        <img src = {Plant} className = "c-about-department-list__image -plant" />
        <img src = {Triangle} className = "c-about-department-list__image -triangle" />
        <img src = {Rainbow} className = "c-about-department-list__image -rainbow" />
        <DepartmentBlock
            name    = { "Engagement" }
            items   = { ["client advising", "project management", "business development"] }
            content = { "Organizing and understanding the nuances of a project can seem overwhelming. Our experienced engagement team works alongside you so you’re up to date as much as you want to be, from project updates to advising on your behalf in meetings so that your best interests are always represented in our designs." }
            isWide  = { true } />
      </div>
    </div>
  </div>

);
export default DepartmentList;