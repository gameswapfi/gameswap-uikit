import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import { ProgressStonk } from "../Svg";
import { ProgressProps } from "./types";
import StonkProgressWrapper from "./StonkProgressWrapper";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const Progress: React.FC<ProgressProps> = ({ primaryStep = 0, secondaryStep = null, showStonkProgress = false }) => (
  <StyledProgress>
    {showStonkProgress && (
      <StonkProgressWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
        <ProgressStonk />
      </StonkProgressWrapper>
    )}
    <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }} />
    {secondaryStep ? <Bar style={{ width: `${stepGuard(secondaryStep)}%` }} /> : null}
  </StyledProgress>
);
export default Progress;
