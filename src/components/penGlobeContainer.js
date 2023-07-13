import React from "react";
import PenGlobe from "./penGlobe";

function PenGlobeContainer() {
  return (
    <>
      <PenGlobe myTop="14vh" mySrc="/globe.svg" myAlt="Globe" />
      <PenGlobe myTop="25vh" mySrc="/message.svg" myAlt="Message" />
    </>
  );
}

export default PenGlobeContainer;
