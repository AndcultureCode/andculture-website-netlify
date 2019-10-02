import React       from 'react'
import Menu        from '../molecules/Menu';
import LogoMarkSVG from '../atoms/LogoMarkSVG';

const Header = () => (
  <header className="c-header">
    <LogoMarkSVG cssClass="c-header__logo" />
    <Menu />
  </header>
);

export default Header
