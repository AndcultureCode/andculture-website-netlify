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
      <DepartmentBlock />
    </div>
    <div className="c-about-department-list__item">
      <DepartmentBlock />
    </div>
    <div className="c-about-department-list__item">
      <img src={AndFreshCircle} className="c-about-department-list__fresh-circle" />
      <img src={VioletStrokedSquare} className="c-about-department-list__violet-square" />
      <DepartmentBlock />
      <img src={CenterLaneScribbles} className="c-about-department-list__scribbles" />
      <img src={StickyNoteBrushSquares} className="c-about-department-list__brush-squares" />
    </div>
  </div>

);
export default DepartmentList;