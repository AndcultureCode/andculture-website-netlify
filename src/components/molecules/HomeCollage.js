import PropTypes              from 'prop-types'
import React, { useState }    from 'react'
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
import VioletLines            from "../../img/home-collage_violet_lines@2x.png";
import BackgroundVideo        from "../atoms/BackgroundVideo";

const HomeCollage = ({ activeVideo }) => {
  const [ videoSeconds,  setVideoSeconds ]  = useState(null);

  const handleOnPause = (state) => {
    console.log(state.playedSeconds);
    if (state == null || state.playedSeconds == null) {
      return;
    }
    setVideoSeconds(state.playedSeconds);
  }

  console.log(videoSeconds);

  return (
    <div className="c-home-collage">
      <BackgroundVideo className="c-home-collage__video" playing={activeVideo === "default"} url="/video/default.mp4" />
      <BackgroundVideo className="c-home-collage__video" playing={activeVideo === "about"} onPause={handleOnPause} url="/video/about.mp4" />
      <BackgroundVideo className="c-home-collage__video" playing={activeVideo === "aboutOut"} onPause={handleOnPause} seekTo={videoSeconds} url="/video/aboutOut.mp4" />
      {/* <BackgroundVideo className="c-home-collage__video" playing={activeVideo === "blog"} url="/video/blog.mp4" />
      <BackgroundVideo className="c-home-collage__video" playing={activeVideo === "blogOut"} url="/video/default.mp4" /> */}
      <BackgroundVideo className="c-home-collage__video" playing={activeVideo === "contact"} onPause={handleOnPause} url="/video/contact.mp4" />
      <BackgroundVideo className="c-home-collage__video" playing={activeVideo === "contactOut"} onPause={handleOnPause} seekTo={videoSeconds} url="/video/contactOut.mp4" />
      <BackgroundVideo className="c-home-collage__video" playing={activeVideo === "work"} onPause={handleOnPause} url="/video/work.mp4" />
      <BackgroundVideo className="c-home-collage__video" playing={activeVideo === "workOut"} onPause={handleOnPause} seekTo={videoSeconds} url="/video/workOut.mp4" />
      {/* <img src={LongBrushImage} alt="Yellow Long Brush Stroke" className="c-home-collage__longbrush" />
      <img src={AngleBrushImage} alt="Angle Brush Stroke" className="c-home-collage__anglebrush" />
      <img src={DropsImage} alt="Drops" className="c-home-collage__drops" />
      <img src={VioletAngleBrushImage} alt="Violet Angle Brush" className="c-home-collage__violet__anglebrush" />
      <img src={FreshBrushImage} alt="Fresh Brush" className="c-home-collage__fresh__brush" />
      <img src={DotPatternImage} alt="Dot Pattern" className="c-home-collage__dotpattern" />
      <img src={SquiggleBrushImage} alt="Squiggle Brush" className="c-home-collage__squigglebrush" />
      <img src={SirachaAngleBrushImage} alt="Siracha Angle Brush" className="c-home-collage__siracha__anglebrush" />
      <img src={TriangleImage} alt="Triangle" className="c-home-collage__triangle" />
      <img src={RainbowImage} alt="Rainbow" className="c-home-collage__rainbow" />
      <img src={VioletLines} alt="Violet Lines" className="c-home-collage__violet__lines" /> */}
    </div>
  );
}

HomeCollage.propTypes = {
  activeVideo: PropTypes.string,
};

export default HomeCollage;
