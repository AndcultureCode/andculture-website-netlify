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
    return;
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

  const sensorOffset = {
    top: -50
  };

  if (isWide) {
    sensorOffset.top = 0;
  }

  return (
    <div
      className = { `c-about-department-list__item__container ${isWide ? "-wide" : ""}` }
      id        = { id }>
      <VizSensor
        partialVisiblity  = { true }
        scrollDelay       = { 100 }
        offset            = { sensorOffset }
        onChange          = { handleVisibilityChange } >
        <div>
          <Fade bottom opposite cascade>
            {children}
          </Fade>
          <div className={`c-about-department-block ${isShort ? "-short " : ""} ${alignRight ? "-align-right" : ""} ${isWide ? "-wide" : ""}` }>
            <Fade bottom opposite cascade>
              <h1>{name}</h1>
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