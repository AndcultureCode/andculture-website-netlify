import React    from 'react'
import Logo     from "../../img/logo.svg"
import { Link } from 'gatsby';
import MobileBreak from '../atoms/MobileBreak';

const FooterDivider = () => (
  <span className="c-footer__divider">|</span>
);

const Footer = () => (
  <footer className="c-footer">
    <div className="c-footer__logo">
      <Link to="/">
        <img src={Logo} alt="andculture" />
      </Link>
    </div>
    <div className="c-footer__info">
      <p className="c-footer__info__details">
        <a href="mailto:info@andculture.com">info@andculture.com</a><FooterDivider />
        <a href="tel:7172331881">717.233.2881</a><FooterDivider />
        <a href="https://goo.gl/maps/5uFiTwZvMEnzR4mr9" target="_blank">614 n. front street, <MobileBreak />harrisburg, pa 17101</a>
      </p>
      <p className="c-footer__info__copyright">
        &copy; andculture. all rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer
