import React    from 'react'
import Logo     from "../../img/logo.svg"
import { Link } from 'gatsby';

const FooterDivider = () => (
  <span className="c-footer__divider">|</span>
);

const Footer = () => (
  <footer className="c-footer">
    <div className="c-footer__logo">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </div>
    <p className="c-footer__info">
      <a href="mailto:info@andculture.com">info@andculture.com</a><FooterDivider />
      <a href="tel:7172331881">717.233.2881</a><FooterDivider />
      <a href="https://goo.gl/maps/5uFiTwZvMEnzR4mr9" target="_blank">614 n. front street, harrisburg, pa 17101</a>
    </p>
    <p className="c-footer__copyright">
      &copy; andculture. all rights reserved.
    </p>
  </footer>
);

export default Footer
