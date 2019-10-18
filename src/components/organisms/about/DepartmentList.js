import React from "react";
import DepartmentBlock from "./DepartmentBlock";
import GeometricBlock from "../../../img/about-geometric-block@2x.png";
import AndFreshCircle from "../../../img/home-collage_fresh_brush@2x.png";
import VioletStrokedSquare from "../../../img/about-violet_stroked square@2x.png";

const DepartmentList = () => (
  <div className="c-about-department-list">
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
    </div>
  </div>

);
export default DepartmentList;