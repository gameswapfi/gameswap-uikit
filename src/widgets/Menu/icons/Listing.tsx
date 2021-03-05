import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 16 12" {...props}>
    <g fillRule="evenodd">
      <path d="M15 2H1a1 1 0 110-2h14a1 1 0 010 2zM15 7H1a1 1 0 110-2h14a1 1 0 010 2zM15 12H1a1 1 0 010-2h14a1 1 0 010 2z" />
    </g>
  </Svg>
);

export default Icon;
