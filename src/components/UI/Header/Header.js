import React from "react";
import "./Header.css";

const header = () => {
  return (
    <div>
      {/* <img src={logo} /> */}
      <span onClick={() => window.scroll(0, 0)} className="header">
        <h1 data-text="cinema club">
          <span>cinema club</span>
        </h1>
      </span>
    </div>
  );
};

export default header;
