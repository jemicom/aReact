import React from "react";
import H1 from "./SH1";
import Nav from "./SNav";
import "./SHeader.css";

const SHeader = (props) => {
  return (
    <header>
      <H1 brandName={props.brandName} />
      <Nav />
    </header>
  );
};

export default SHeader;
