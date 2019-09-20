import React                  from 'react'
import AngleBrushImage        from "../../img/home-collage_anglebrush@2x.png";
import DotPatternImage        from "../../img/home-collage_dotpattern@2x.png";
import DropsImage             from "../../img/home-collage_drops@2x.png";
import FreshBrushImage        from "../../img/home-collage_fresh_brush@2x.png";
import LongBrushImage         from "../../img/home-collage_longbrush@2x.png";
import RainbowImage           from "../../img/home-collage_rainbow@2x.png";
import ScribbleImage          from "../../img/home-collage_scribble@2x.png";
import SirachaAngleBrushImage from "../../img/home-collage_siracha_anglebrush@2x.png";
import SirachBrushImage       from "../../img/home-collage_siracha_brush@2x.png";
import SquareImage            from "../../img/home-collage_square@2x.png";
import SquiggleBrushImage     from "../../img/home-collage_squigglebrush@2x.png";
import TriangleImage          from "../../img/home-collage_triangle@2x.png";
import VioletAngleBrushImage  from "../../img/home-collage_violet_anglebrush@2x.png";

const HomeCollage = () => (
  <div className="c-home-collage">
    <img src={LongBrushImage} alt="Yellow Long Brush Stroke" className="c-home-collage__longbrush" />
    <img src={AngleBrushImage} alt="Angle Brush Stroke" className="c-home-collage__anglebrush" />
    <img src={DropsImage} alt="Drops" className="c-home-collage__drops" />
    <img src={VioletAngleBrushImage} alt="Violet Angle Brush" className="c-home-collage__violet__anglebrush" />
    <img src={FreshBrushImage} alt="Fresh Brush" className="c-home-collage__fresh__brush" />
    <img src={DotPatternImage} alt="Dot Pattern" className="c-home-collage__dotpattern" />
  </div>
)

// HomeCollage.propTypes = {
// };

export default HomeCollage;
