import React, { useState }  from 'react'
import RubberBand           from 'react-reveal/RubberBand';

const EasterEgg = () => {
  const [ snapEasterEgg,  setSnapEasterEgg ]  = useState(0);
  const [ snapTimer, setSnapTimer ] = useState(null);

  if (snapTimer == null) {
    setSnapTimer(setInterval(() => setSnapEasterEgg(snapEasterEgg + 1), 15000));
  }

  return (
    <RubberBand spy = { snapEasterEgg }><p className="c-icon-grid__easteregg"><span>*</span>psst...new site coming soon</p></RubberBand>
  );
}

export default EasterEgg
