import React from "react";

const DepartmentBlock = ({name, items, content }) => (
  <div className="c-about-department-block">
    <h1>{name}</h1>
    <div className="c-about-department-block__list">
    <ul>
      {items.map((item, idx) => {
        return <li key={idx}>{item}</li>
      })}
      </ul>
    </div>
    <div className="c-about-department-block__message">
      <p>
        {content}
      </p>
    </div>
  </div>
);
export default DepartmentBlock;