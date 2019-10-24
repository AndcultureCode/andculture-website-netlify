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
      <DepartmentBlock name={"Strategy"} items={["item 1", "item 2", "item 3"]} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
    </div>
    <div className="c-about-department-list__item">
    <DepartmentBlock name={"Design"} items={["item 1", "item 2", "item 3"]} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
    </div>
    <div className="c-about-department-list__item">
      <img src={AndFreshCircle} className="c-about-department-list__fresh-circle" />
      <img src={VioletStrokedSquare} className="c-about-department-list__violet-square" />
      <DepartmentBlock name={"Engineering"} items={["item 1", "item 2", "item 3"]} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
      <img src={CenterLaneScribbles} className="c-about-department-list__scribbles" />
      <img src={StickyNoteBrushSquares} className="c-about-department-list__brush-squares" />
    </div>
  </div>

);
export default DepartmentList;