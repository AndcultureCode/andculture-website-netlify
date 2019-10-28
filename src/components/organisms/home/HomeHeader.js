import React, { useState }    from 'react';
import IconGrid               from '../../molecules/IconGrid';
import SquiggleLine           from '../../atoms/SquiggleLine';
import HomeCollage            from '../../molecules/HomeCollage';
import Menu                   from '../../molecules/Menu';
import LogoMarkSVG            from '../../atoms/LogoMarkSVG';
import { CSSTransitionGroup } from 'react-transition-group';

const MainHeaderText = ({key, headerText, subtleText}) => (
  <div className="header-text" key={key}>
    <h1>
      { headerText.map((text, key) => (<div className="header-text-main" key={key}>{text}</div>)) }
    </h1>
    {
      subtleText != null &&
        <label className="c-home-header__scroll header-text-subtle">{subtleText}</label>
    }
  </div>
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

  const headerLines = {
    default: (
      <MainHeaderText
        key        = "default"
        headerText = {[ <span>a<span className="fade">ndculture</span></span>, "design", "company" ]} />
    ),
    about: (
      <MainHeaderText
        key        = "about"
        headerText = {[ "process can", "be a dirty word" ]} />
    ),
    contact: (
      <MainHeaderText
        key        = "contact"
        headerText = {[ "yes, we'd love", "to talk" ]} />
    ),
    work: (
      <MainHeaderText
        key        = "work"
        headerText = {[ "how we make it", "look like magic" ]} />
    ),
  };

  return (
    <header className="c-home-header">
      <LogoMarkSVG className="c-home-header__logo" />
      <HomeCollage activeVideo={activeVideo} />
      {/* <SquiggleLine /> */}
      <aside className="c-home-header__content">
        <CSSTransitionGroup
          transitionName="header-text-main"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={300}>
          { headerLines[activeIcon] || headerLines.default }
        </CSSTransitionGroup>
        {/* <Menu /> */}
      </aside>
      <IconGrid onHover={handleOnHover} />
    </header>
  );
}

export default HomeHeader;
