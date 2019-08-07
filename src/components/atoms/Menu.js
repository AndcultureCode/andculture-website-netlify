import React     from 'react'

const Menu = class extends React.Component {

  // Constructor
  // --------------------------------------
  constructor(props) {
    super(props)
    this.state = {
      active:           false,
      activeMenuClass:  '',
    }

    this._onKeyDown  = this._onKeyDown.bind(this);
    this._toggleMenu = this._toggleMenu.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this._onKeyDown, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this._onKeyDown, false);
  }


  // Render
  // --------------------------------------

  render() {
    return (
      <div className="c-menu">
        <a
          href      = "/"
          className = "c-menu__toggle"
          onClick   = {(e) => this._toggleMenu(e)}>Menu</a>
        <div className={`c-menu__overlay ${this.state.activeMenuClass}`}>
          { /* Add the menu items here */ }
        </div>
      </div>
    );
  }

  // Private MEthods
  // --------------------------------------

  _onKeyDown(event){
    if (event.keyCode === 27) {
      this._toggleMenu(event);
    }
  }

  _toggleMenu(e) {
    e.preventDefault();
    console.log("Toggle Menu Clicked");
    this.setState({
      active: !this.state.active
    }, () => {
      this.setState({ activeMenuClass: this.state.active ? 'active' : '' });
    });
  }
}

export default Menu
