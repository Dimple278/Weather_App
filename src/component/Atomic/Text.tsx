import React from "react";
import { IText } from "../Interface/IText";

const Text = (props: IText) => {
  const { type, color = "white", children } = props;
  const BaseComponent = type ?? "p";

  return React.createElement(BaseComponent, { style: { color } }, children);
};

export default Text;
