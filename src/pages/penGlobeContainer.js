import React from "react";
import PenGlobe from "./penGlobe";

function PenGlobeContainer() {
  return (
    <>
      <PenGlobe myTop="12vh" mySrc="/pencil.svg" myAlt="Pencil" />
      <PenGlobe myTop="23vh" mySrc="/globe.svg" myAlt="Globe" />
    </>
  );
}

export default PenGlobeContainer;
