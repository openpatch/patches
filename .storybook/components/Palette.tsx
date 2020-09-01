import React from "react";
import ColorSwatch from "./ColorSwatch";

const Palette = ({ palette }) =>
  Object.keys(palette).map((name) => (
    <ColorSwatch key={name} name={name} color={palette[name]} />
  ));

export default Palette;
