import React, { useState }  from "react";
import Bounce               from "react-reveal/Bounce";
import Fade                 from "react-reveal/Fade";
import VizSensor            from 'react-visibility-sensor';

const DepartmentBlock = ({ children, name, items, content, isShort, isWide, isScrollDown, alignRight }) => {
  const [ isVisible, setIsVisible ] = useState(false);
  const [ isIconsVisible, setIsIconsVisible ] = useState(false);
  let iconTimer = null;

  const handleVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);

    if (iconTimer != null) {
      clearTimeout(iconTimer);
    }
    if (!isVisible) {
      setIsIconsVisible(isVisible);
    }
    else {
      iconTimer = setTimeout(() => {
        setIsIconsVisible(isVisible);
        iconTimer = null;
      }, 500);
    }
  }

  return (
    <div
      className = { `c-about-department-list__item__container ${isWide ? "-wide" : ""}` }>
      <VizSensor
        partialVisiblity = { true }
        onChange         = { handleVisibilityChange } >
        <div>
          <Bounce bottom opposite = { isScrollDown } cascade when = { isIconsVisible }>
            {children}
          </Bounce>
          <div className={`c-about-department-block ${isShort ? "-short " : ""} ${alignRight ? "-align-right" : ""} ${isWide ? "-wide" : ""}` }>
            <Fade bottom opposite = { isScrollDown } cascade when = { isVisible }>
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