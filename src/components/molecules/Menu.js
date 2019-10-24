import React         from 'react'
import { Link }      from 'gatsby';
import Icon          from '../atoms/Icon';
import LogoMarkSVG   from '../atoms/LogoMarkSVG';
import SocialIcon    from '../atoms/SocialIcon';

const Menu = class extends React.Component {

  // Constructor
  // --------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      active:           false,
      activeMenuClass:  '',
    };

    this._onKeyDown  = this._onKeyDown.bind(this);
    this._toggleMenu = this._toggleMenu.bind(this);
  }


  // Lifecycle Methods
  // --------------------------------------

  componentDidMount(){
    document.addEventListener("keydown", this._onKeyDown, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this._onKeyDown, false);
  }

  render() {
    return (
      <div className="c-menu">
        <a
          href      = "/"
          className = "c-menu__toggle"
          onClick   = {(e) => this._toggleMenu(e)}>Menu</a>
        <div className={`c-menu__overlay ${this.state.activeMenuClass}`}>
          <SocialLinks />
          <div className="c-menu__overlay__header">
            <LogoMarkSVG cssClass="c-menu__logo" />
            <a href      = "#"
              className = "c-menu__close"
              onClick   = {(e) => this._toggleMenu(e)}>
              <Icon name="x" />
            </a>
          </div>
          <div className="c-menu__overlay__container">
            <MainNavigation />
            <aside className="c-menu__overlay__container__aside">
              <SubNavigation />
              <Locations />
            </aside>
          </div>
        </div>
      </div>
    );
  }


  // Private Methods
  // --------------------------------------

  _onKeyDown(event){
    if (event.keyCode === 27) {
      this._toggleMenu(event);
    }
  }

  _toggleMenu(e) {
    e.preventDefault();

    this.setState({
      active: !this.state.active
    }, () => {
      this.setState({ activeMenuClass: this.state.active ? 'active' : '' });
    });
  }
}


// Components
// --------------------------------------

const Locations = () => (
  <div className="c-menu__locations">
    <div className="c-menu__locations__column">
      <p className="c-menu__locations__header">
        Harrisburg
      </p>
      <p>
        614 north front street<br/>
        harrisburg, pa, 17101<br />
        717.233.2881
      </p>
    </div>
    <div className="c-menu__locations__column">
      <p className="c-menu__locations__header">
        Denver
      </p>
      <p>
        1001 bannock st, suite 240<br />
        denver, co 80204<br />
        717.233.2881
      </p>
    </div>
  </div>
);

const MainNavigation = () => (
  <nav className="c-menu__overlay__container__main">
    <ul>
      <li><Link to="">about</Link></li>
      <li><Link to="">team</Link></li>
      <li><Link to="">work</Link></li>
      <li><Link to="">blog</Link></li>
    </ul>
  </nav>
);

const SocialLinks = () => (
  <div className="c-menu__social">
    <a href="https://www.instagram.com/andculture/" target="_blank" className="c-menu__social__link">
      <SocialIcon
        type      = "instagram"
        className = "c-social-icon" />
    </a>
    <a href="https://www.linkedin.com/company/andculture/" target="_blank" className="c-menu__social__link">
      <SocialIcon
        type      = "linkedin"
        className = "c-social-icon" />
    </a>
    <a href="https://twitter.com/andculture" target="_blank" className="c-menu__social__link">
      <SocialIcon
        type      = "twitter"
        className = "c-social-icon" />
    </a>
    <a href="https://dribbble.com/andculture" target="_blank" className="c-menu__social__link">
      <SocialIcon
        type      = "dribbble"
        className = "c-social-icon" />
    </a>
  </div>
);

const SubNavigation = () => (
  <nav className="c-menu__overlay__container__aside__nav">
    <ul>
      <li><Link to="">lab</Link></li>
      <li><Link to="">shop</Link></li>
      <li><Link to="">careers</Link></li>
      <li><Link to="">contact us</Link></li>
      <li><Link to="" target="_blank">chipotle</Link></li>
    </ul>
  </nav>
);


// Exports
// --------------------------------------

export default Menu;
