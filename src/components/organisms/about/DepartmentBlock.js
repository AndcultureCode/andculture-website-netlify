import React, { useState }  from "react";
import Bounce               from "react-reveal/Bounce";
import Fade                 from "react-reveal/Fade";
import VizSensor            from 'react-visibility-sensor';
import { scroller }         from "react-scroll";

const DepartmentBlock = class DepartmentBlock extends React.Component {

  _mobileBreakpoint = 940;

  // Constructor
  // --------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      isIconsVisible: false,
      isMoble:        window.innerWidth < this._mobileBreakpoint,
      isVisible:      false,
      iconTimer:      null,
    };

    this._handleVisibilityChange = this._handleVisibilityChange.bind(this);
    this._handleWindowResize     = this._handleWindowResize.bind(this);
  }


  // Lifecycle Methods
  // --------------------------------------

  componentDidMount(){
    document.addEventListener("resize", this._handleWindowResize);
  }

  componentWillUnmount(){
    document.removeEventListener("resize", this._handleWindowResize);
  }

  render() {
    return (
      <div
        className = { `c-about-department-list__item__container ${this.props.isWide ? "-wide" : ""}` }
        id        = { this.props.id }>
        <VizSensor
          partialVisiblity  = { true }
          onChange          = { this.handleVisibilityChange } >
          <div>
            <div className="c-about-department-list__image__animate">
              <Fade bottom opposite cascade when = { this.state.isIconsVisible } disabled = { this.state.isMoble }>
                {this.props.children}
              </Fade>
            </div>
            <div className="c-about-department-list__image__static">
              {this.props.children}
            </div>
            <div className={`c-about-department-block ${this.props.isShort ? "-short " : ""} ${this.props.alignRight ? "-align-right" : ""} ${this.props.isWide ? "-wide" : ""}` }>
              <Fade bottom opposite cascade when = { this.state.isVisible } disabled = { this.state.isMoble }>
                <h1>{ this.props.name.map((text, key) => (<span key={ key }>{text}<br /></span>)) }</h1>
                <div className="c-about-department-block__container">
                  <div className="c-about-department-block__message">
                    <p>
                      {this.props.content}
                    </p>
                  </div>
                  <div className="c-about-department-block__list">
                    <ul>
                      {this.props.items.map((item, idx) => {
                        return <li key={idx}>{item}</li>
                      })}
                    </ul>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </VizSensor>
      </div>
    );
  }

  // Private Methods
  // --------------------------------------

  _handleVisibilityChange(isVisible) {
    if (!isVisible) {
      return;
    }

    if (this.state.iconTimer != null) {
      clearTimeout(this.state.iconTimer);
    }
    if (!isVisible) {
      this.setState({
        isVisible:      isVisible,
        isIconsVisible: isVisible,
      });
    }
    else {
      // scroller.scrollTo(id, {
      //   delay: 1500,
      //   smooth: "easeInOutQuart",
      //   offset: -200,
      // });

      const iconTimer = setTimeout(() => {
        this.setState({
          isIconsVisible: isVisible,
          iconTimer:      null,
        });
      }, 500);

      this.setState({
        isVisible: isVisible,
        iconTimer: iconTimer,
      });
    }
  }

  _handleWindowResize() {
    if (this.state.isMoble !== window.innerWidth < this._mobileBreakpoint) {
      this.setState({
        isMoble: window.innerWidth < this._mobileBreakpoint,
      });
    }
  }
}

export default DepartmentBlock;