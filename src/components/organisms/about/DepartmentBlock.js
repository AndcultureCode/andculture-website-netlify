import React, { useState }  from "react";
import Bounce               from "react-reveal/Bounce";
import Fade                 from "react-reveal/Fade";
import VizSensor            from 'react-visibility-sensor';
import { scroller }         from "react-scroll";

const DepartmentBlock = ({ children, name, id, items, content, isShort, isWide, alignRight }) => {
  const [ isVisible, setIsVisible ] = useState(false);
  const [ isIconsVisible, setIsIconsVisible ] = useState(false);
  let iconTimer = null;

  const handleVisibilityChange = (isVisible) => {
    if (!isVisible) {
      return;
    }
    setIsVisible(isVisible);

    if (iconTimer != null) {
      clearTimeout(iconTimer);
    }
    if (!isVisible) {
      setIsIconsVisible(isVisible);
    }
    else {
      // scroller.scrollTo(id, {
      //   delay: 1500,
      //   smooth: "easeInOutQuart",
      //   offset: -200,
      // });

      iconTimer = setTimeout(() => {
        setIsIconsVisible(isVisible);
        iconTimer = null;
      }, 500);
    }
  }

  return (
    <div
      className = { `c-about-department-list__item__container ${isWide ? "-wide" : ""}` }
      id        = { id }>
      <VizSensor
        partialVisiblity  = { true }
        onChange          = { handleVisibilityChange } >
        <div>
          <div className="c-about-department-list__image__animate">
            <Fade bottom opposite cascade when = { isIconsVisible }>
              {children}
            </Fade>
          </div>
          <div className="c-about-department-list__image__static">
            {children}
          </div>
          <div className={`c-about-department-block ${isShort ? "-short " : ""} ${alignRight ? "-align-right" : ""} ${isWide ? "-wide" : ""}` }>
            <Fade bottom opposite cascade when = { isVisible }>
              <h1>{ name.map((text, key) => (<span key={ key }>{text}<br /></span>)) }</h1>
              <div className="c-about-department-block__container">
                <div className="c-about-department-block__message">
                  <p>
                    {content}
                  </p>
                </div>
                <div className="c-about-department-block__list">
                  <ul>
                    {items.map((item, idx) => {
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

export default DepartmentBlock;