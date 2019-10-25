import React, { useState }    from 'react';
import IconGrid               from '../../molecules/IconGrid';
import SquiggleLine           from '../../atoms/SquiggleLine';
import HomeCollage            from '../../molecules/HomeCollage';
import Menu                   from '../../molecules/Menu';
import LogoMarkSVG            from '../../atoms/LogoMarkSVG';
import { CSSTransitionGroup } from 'react-transition-group';

const MainHeaderText = ({key, headerLine1, headerLine2, headerLine3, subtleText}) => (
  <div className="header-text" key={key}>
    <h1>
      <div className="header-text-main">{headerLine1}</div>
      <div className="header-text-main">{headerLine2}</div>
      <div className="header-text-main">{headerLine3}</div>
    </h1>
    <label className="c-home-header__scroll header-text-subtle">{subtleText}</label>
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
        key="default"
        headerLine1={<>a<span className="fade">ndculture</span></>}
        headerLine2="design"
        headerLine3="company"
        subtleText="Take a stroll, then scroll" />
    ),
    about: (
      <MainHeaderText
        key="about"
        headerLine1="process can"
        headerLine2="be a dirty word"
        subtleText="learn more about the andculture way" />
    ),
    blog: (
      <MainHeaderText
        key="blog"
        headerLine1="look into our"
        headerLine2="world"
        subtleText="check out our musings in the blog" />
    ),
    work: (
      <MainHeaderText
        key="blog"
        headerLine1="we make it look"
        headerLine2="like magic"
        subtleText="learn more about who we help &amp; how" />
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
