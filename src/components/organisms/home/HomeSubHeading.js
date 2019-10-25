import React, { useState }    from 'react';

const MainHeaderText = ({key, children}) => (
  <div className="header-text" key={key}>
    {children}
  </div>
)

const HomeSubHeader = () => {

  return (
    <div className="subHeading">
   <div className="we-pursue-forward-thinking-par">
          <h2>We pursue a forward-thinking partners<br/>
         who need someone to design a solution.</h2>
         </div>
<div className="flexParent">
         <div  className="when-you-come-to-us-you-ve left"><p>When you come to us, you’ve already had the,
           “There has to be a better way!” conversation. Internally, we call it a breaking reality; you can call it, “Why doesn’t this work anymore?”</p>
           </div>

           <div  className="when-you-come-to-us-you-ve right"><p>Now you need the “A ha!” moment. That’s what we excel at:
              helping you put a finger on what’s wrong, and then designing a solution that might not even exist yet.</p>
           </div>
   </div>
   </div>
  );
}

export default HomeSubHeader;
