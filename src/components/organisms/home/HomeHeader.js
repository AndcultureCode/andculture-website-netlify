import React, { useState }  from 'react';
import IconGrid             from '../../molecules/IconGrid';
import SquiggleLine         from '../../atoms/SquiggleLine';
import HomeCollage          from '../../molecules/HomeCollage';
import Menu                 from '../../molecules/Menu';
import LogoMarkSVG          from '../../atoms/LogoMarkSVG';

const HomeHeader = () => {
  const [ activeVideo, setActiveVideo ] = useState("default");

  const handleOnHover = (e, video) => {
    if (e.type === "mouseleave") {
      video += "Out";
    }
    setActiveVideo(video);
  }

  return (
    <header className="c-home-header">
      <LogoMarkSVG className="c-home-header__logo" />
      <HomeCollage activeVideo={activeVideo} />
      {/* <SquiggleLine /> */}
      <aside className="c-home-header__content">
        <h1>a<span className="fade">ndculture</span><br />
        design<br />
        company</h1>
        <label className="c-home-header__scroll">Take a stroll, then scroll</label>
        {/* <Menu /> */}
      </aside>
      <IconGrid onHover={handleOnHover} />
    </header>
  );
}

export default HomeHeader;
