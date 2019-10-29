import React, { useState }  from 'react'
import RubberBand           from 'react-reveal/RubberBand';

const EasterEgg = () => {
  const [ snapEasterEgg,  setSnapEasterEgg ]  = useState(0);
  const [ snapTimer, setSnapTimer ] = useState(null);

  if (snapTimer == null) {
    setSnapTimer(setTimeout(() => {
      setSnapEasterEgg(snapEasterEgg + 1);
      setSnapTimer(null);
    }, Math.floor(Math.random() * (20000 + 1)) + 10000));
  }

  return (
    <RubberBand spy = { snapEasterEgg }><p className="c-easteregg"><span>*</span>psst... new site coming soon</p></RubberBand>
  );
}

export default EasterEgg
