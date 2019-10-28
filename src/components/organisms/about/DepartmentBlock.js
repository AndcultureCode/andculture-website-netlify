import React from "react";

const DepartmentBlock = ({ name, items, content, isShort, isWide, alignRight }) => (
  <div className={`c-about-department-block ${isShort ? "-short " : ""} ${alignRight ? "-align-right" : ""} ${isWide ? "-wide" : ""}` }>
    <h1>{name}</h1>
    <div>
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
  </div>
);
export default DepartmentBlock;