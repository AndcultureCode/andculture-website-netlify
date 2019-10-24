import React, { useState }  from 'react';
import IconGrid             from '../../molecules/IconGrid';
import SquiggleLine         from '../../atoms/SquiggleLine';
import HomeCollage          from '../../molecules/HomeCollage';
import Menu                 from '../../molecules/Menu';
import LogoMarkSVG          from '../../atoms/LogoMarkSVG';

const HomeHeader = () => {
  const [ activeIcon, setActiveIcon ] = useState(null);
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

  let header = [
    (<h1>a<span className="fade">ndculture</span><br />design<br />company</h1>),
    (<label className="c-home-header__scroll">Take a stroll, then scroll</label>)
  ]

  if (activeIcon === "about") {
    header = [
      (<h1>process can<br />be a dirty word</h1>),
      (<label className="c-home-header__scroll">learn more about the andculture way</label>)
    ]
  }

  return (
    <header className="c-home-header">
      <LogoMarkSVG cssClass="c-home-header__logo" />
      <HomeCollage activeVideo={activeVideo} />
      {/* <SquiggleLine /> */}
      <aside className="c-home-header__content">
        { header.map((line) => line)}
        {/* <Menu /> */}
      </aside>
      <IconGrid onHover={handleOnHover} />
    </header>
  );
}

export default HomeHeader;
