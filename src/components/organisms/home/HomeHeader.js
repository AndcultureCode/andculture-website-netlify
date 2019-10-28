import React, { useState }    from 'react';
import IconGrid               from '../../molecules/IconGrid';
import SquiggleLine           from '../../atoms/SquiggleLine';
import HomeCollage            from '../../molecules/HomeCollage';
import Menu                   from '../../molecules/Menu';
import LogoMarkSVG            from '../../atoms/LogoMarkSVG';
import { CSSTransitionGroup } from 'react-transition-group';
import Fade                   from "react-reveal/Fade";

const MainHeaderText = ({isVisible, headerText, subtleText}) => (
  <Fade bottom cascade when = { isVisible }>
    <div className = "header-text">
      { headerText.map((text, key) => (<h1 key={key}>{text}</h1>)) }
      {
        subtleText != null &&
          <label className="c-home-header__scroll header-text-subtle">{subtleText}</label>
      }
    </div>
  </Fade>
)

const HomeHeader = () => {
  const [ activeIcon,  setActiveIcon ]  = useState(null);
  const [ activeVideo, setActiveVideo ] = useState("default");

  const handleOnHover = (e, type) => {
    if (e.type === "mouseleave") {
      setActiveIcon(null);
      setActiveVideo(`${type}Out`);
      return;
    }
    setActiveIcon(type);
    setActiveVideo(type);
  }

  return (
    <header className="c-home-header">
      <LogoMarkSVG className="c-home-header__logo" />
      <HomeCollage activeVideo={activeVideo} />
      {/* <SquiggleLine /> */}
      <aside className="c-home-header__content">
        <MainHeaderText
          isVisible = { activeIcon == null }
          headerText = {[ <span>a<span className="fade">ndculture</span></span>, "design", "company" ]} />
        <MainHeaderText
          isVisible = { activeIcon === "about" }
          headerText = {[ "process can", "be a dirty word" ]} />
        <MainHeaderText
          isVisible = { activeIcon === "contact" }
          headerText = {[ "yes, we'd love", "to talk" ]} />
        <MainHeaderText
          isVisible = { activeIcon === "work" }
          headerText = {[ "how we make it", "look like magic" ]} />
        {/* <Menu /> */}
      </aside>
      <IconGrid onHover={handleOnHover} />
    </header>
  );
}

export default HomeHeader;
