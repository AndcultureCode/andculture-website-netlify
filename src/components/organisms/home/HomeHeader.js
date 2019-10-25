import React, { useState }    from 'react';
import IconGrid               from '../../molecules/IconGrid';
import SquiggleLine           from '../../atoms/SquiggleLine';
import HomeCollage            from '../../molecules/HomeCollage';
import Menu                   from '../../molecules/Menu';
import LogoMarkSVG            from '../../atoms/LogoMarkSVG';
import { CSSTransitionGroup } from 'react-transition-group';

const MainHeaderText = ({key, children}) => (
  <div className="header-text" key={key}>
    {children}
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
    "default": (
      <MainHeaderText key="default">
          <h1>a<span className="fade">ndculture</span><br />design<br />company</h1>
          <label className="c-home-header__scroll">Take a stroll, then scroll</label>
      </MainHeaderText>
    ),
    "about": (
      <MainHeaderText key="about">
        <h1>process can<br />be a dirty word</h1>
        <label className="c-home-header__scroll">learn more about the andculture way</label>
      </MainHeaderText>
    ),
    "blog": (
      <MainHeaderText key="blog">
        <h1>look into our<br />world</h1>
        <label className="c-home-header__scroll">check out our musings in the blog</label>
      </MainHeaderText>
    ),
    "work": (
      <MainHeaderText key="work">
        <h1>we make it look<br />like magic</h1>
        <label className="c-home-header__scroll">learn more about who we help &amp; how</label>
      </MainHeaderText>
    ),
  };

  return (
    <header className="c-home-header">
      <LogoMarkSVG className="c-home-header__logo" />
      <HomeCollage activeVideo={activeVideo} />
      {/* <SquiggleLine /> */}
      <aside className="c-home-header__content">
        <CSSTransitionGroup
          transitionName="header-text"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={1000}>
          { headerLines[activeIcon] || headerLines.default }
        </CSSTransitionGroup>
        {/* <Menu /> */}
      </aside>
      <IconGrid onHover={handleOnHover} />
    </header>
  );
}

export default HomeHeader;
