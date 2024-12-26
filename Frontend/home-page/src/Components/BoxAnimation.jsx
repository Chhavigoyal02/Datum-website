import React from "react";
import './BoxAnimation.css';

const DotPattern = (props) => {
  const rows = 8; 
  const columns = 8;
  const direction = props.direction;

  return (
    <div className={`dot-container-${direction}`}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="row_dot">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div key={colIndex} className="dot"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

const BoxAnimation = (props) => {
  const direction = props.direction;
  return (
    <div className="dot_main">
      <DotPattern direction={direction} />
    </div>
  );
};

export default BoxAnimation;
