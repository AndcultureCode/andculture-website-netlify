import React                    from "react";
import DepartmentBlock          from "./DepartmentBlock";
import BlueSwoosh               from "../../../img/about-blue_swoosh.png";
import BlueSwoosh2x             from "../../../img/about-blue_swoosh@2x.png";
import X                        from "../../../img/about-x.png";
import X2x                      from "../../../img/about-x@2x.png";
import SixDots                  from "../../../img/about-six_dots.png";
import SixDots2x                from "../../../img/about-six_dots@2x.png";
import FogDot                   from "../../../img/about-fog_dot-pattern.png";
import FogDot2x                 from "../../../img/about-fog_dot-pattern@2x.png";
import GeometricBlock           from "../../../img/about-red_diamond.png";
import GeometricBlock2x         from "../../../img/about-red_diamond@2x.png";
import StickyNoteBrushSquares   from "../../../img/about-sticky-note_brush-squares.png";
import StickyNoteBrushSquares2x from "../../../img/about-sticky-note_brush-squares@2x.png";
import Go                       from "../../../img/about-go.png";
import Go2x                     from "../../../img/about-go@2x.png";
import Squiggle                 from "../../../img/about-blue_squiggle.png";
import Squiggle2x               from "../../../img/about-blue_squiggle@2x.png";
import AlignLines               from "../../../img/about-align_lines.png";
import AlignLines2x             from "../../../img/about-align_lines@2x.png";
import DoodleDots               from "../../../img/about-doodle_dots.png";
import DoodleDots2x             from "../../../img/about-doodle_dots@2x.png";
import DabDots                  from "../../../img/about-dab_dots.png";
import DabDots2x                from "../../../img/about-dab_dots@2x.png";
import Asterisk                 from "../../../img/about-yellow_asterisk.png";
import Asterisk2x               from "../../../img/about-yellow_asterisk@2x.png";
import RedBlob                  from "../../../img/about-red_blob.png";
import RedBlob2x                from "../../../img/about-red_blob@2x.png";
import BendyLines               from "../../../img/about-bendy_lines.png";
import BendyLines2x             from "../../../img/about-bendy_lines@2x.png";
import Plant                    from "../../../img/about-plant.png";
import Plant2x                  from "../../../img/about-plant@2x.png";
import Triangle                 from "../../../img/about-triangle.png";
import Triangle2x               from "../../../img/about-triangle@2x.png";
import Rainbow                  from "../../../img/about-sriracha_rainbow.png";
import Rainbow2x                from "../../../img/about-sriracha_rainbow@2x.png";
import HomeSubHeader            from '../../../components/organisms/home/HomeSubHeading';

const DepartmentList = () => (
  <div className={`c-about-department-list`} id="about">
    <HomeSubHeader />
    <div>
      {/* <h2>how do you do what you do?</h2> */}
      <div className="c-about-department-list__item">
        <DepartmentBlock
            name    = { "Strategy" }
            id      = { "about-strategy" }
            items   = { ["discovery and research", "data analysis", "content and marketing"] }
            content = { "“Why?” That’s what our Strategy team intends to find out, right from Discovery on through site and content development. We dig deep to get to the “Why?” behind your team’s stated problem. We don’t assume an answer. But we’re ready to use data and expertise to explore solutions." }
            isShort = { true }>
          <img src = {GeometricBlock} srcSet={`${GeometricBlock} 1x, ${GeometricBlock2x} 2x`} className = "c-about-department-list__image -geometric-block" alt="" />
          <img src = {BlueSwoosh} srcSet={`${BlueSwoosh} 1x, ${BlueSwoosh2x} 2x`} className = "c-about-department-list__image -swoosh" alt="" />
          <img src = {X} srcSet={`${X} 1x, ${X2x} 2x`} className = "c-about-department-list__image -x" alt="" />
          <img src = {SixDots} srcSet={`${SixDots} 1x, ${SixDots2x} 2x`} className = "c-about-department-list__image -six-dots" alt="" />
          <img src = {FogDot} srcSet={`${FogDot} 1x, ${FogDot2x} 2x`} className = "c-about-department-list__image -fog-dot" alt="" />
        </DepartmentBlock>
      </div>
      <div className="c-about-department-list__item">
        <DepartmentBlock
            name       = { "Design" }
            id         = { "about-design" }
            items      = { ["product design", "web design", "event design"] }
            content    = { "From revamping a website to creating the aesthetics for a massive live event from scratch, our design team is up to the challenge. We value pushing each other creatively with a passion that borders on relentless. The result: your brand hits new levels." }
            alignRight = { true }>
          <img src = {Go} srcSet={`${Go} 1x, ${Go2x} 2x`} className = "c-about-department-list__image -go" alt="" />
          <img src = {Squiggle} srcSet={`${Squiggle} 1x, ${Squiggle2x} 2x`} className = "c-about-department-list__image -squiggle" alt="" />
          <img src = {AlignLines} srcSet={`${AlignLines} 1x, ${AlignLines2x} 2x`} className = "c-about-department-list__image -align-lines" alt="" />
          <img src = {DoodleDots} srcSet={`${DoodleDots} 1x, ${DoodleDots2x} 2x`} className = "c-about-department-list__image -doodle-dots" alt="" />
        </DepartmentBlock>
      </div>
      <div className="c-about-department-list__item">
        <DepartmentBlock
            name    = { "Engineering" }
            id      = { "about-engineering" }
            items   = { ["app development", "software design", "client-side application"] }
            content = { "Using Agile as our base, we work collaboratively with you to think beyond the obvious and deliver design thinking — it’s what has helped us come up with entirely new platforms out of thin air. You’re working with developers who live for this every day." }>
          <img src = {StickyNoteBrushSquares} srcSet={`${StickyNoteBrushSquares} 1x, ${StickyNoteBrushSquares2x} 2x`} className = "c-about-department-list__image -brush-squares" alt="" />
          <img src = {DabDots} srcSet={`${DabDots} 1x, ${DabDots2x} 2x`} className = "c-about-department-list__image -dab-dots" alt="" />
          <img src = {Asterisk} srcSet={`${Asterisk} 1x, ${Asterisk2x} 2x`} className = "c-about-department-list__image -asterisk" alt="" />
          <img src = {RedBlob} srcSet={`${RedBlob} 1x, ${RedBlob2x} 2x`} className = "c-about-department-list__image -red-blob" alt="" />
          <img src = {BendyLines} srcSet={`${BendyLines} 1x, ${BendyLines2x} 2x`} className = "c-about-department-list__image -bendy-lines" alt="" />
        </DepartmentBlock>
      </div>
      <div className="c-about-department-list__item">
        <DepartmentBlock
            name    = { "Engagement" }
            id      = { "about-engagement" }
            items   = { ["client advising", "project management", "business development"] }
            content = { "Organizing and understanding the nuances of a project can seem overwhelming. Our experienced engagement team works alongside you so you’re up to date as much as you want to be, from project updates to advising on your behalf in meetings so that your best interests are always represented in our designs." }
            isWide  = { true }>
          <img src = {Plant} srcSet={`${Plant} 1x, ${Plant2x} 2x`} className = "c-about-department-list__image -plant" alt="" />
          <img src = {Triangle} srcSet={`${Triangle} 1x, ${Triangle2x} 2x`} className = "c-about-department-list__image -triangle" alt="" />
          <img src = {Rainbow} srcSet={`${Rainbow} 1x, ${Rainbow2x} 2x`} className = "c-about-department-list__image -rainbow" alt="" />
        </DepartmentBlock>
      </div>
    </div>
  </div>

);
export default DepartmentList;