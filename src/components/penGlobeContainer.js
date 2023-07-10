import React from "react";
import PenGlobe from "./penGlobe";

function PenGlobeContainer() {
  return (
    <>
      <PenGlobe myTop="12vh" mySrc="/globe.svg" myAlt="Globe" />
      <PenGlobe myTop="23vh" mySrc="/message.svg" myAlt="Message" />
    </>
  );
}

export default PenGlobeContainer;
