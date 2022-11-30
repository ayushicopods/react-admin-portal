import React from "react";
import "./counterchip.css";
function CounterChip({ counter, counterChipStyle }) {
  return (
    <span className={counterChipStyle ? counterChipStyle : "counterChip"}>
      {counter > 9 ? "9+" : counter}
    </span>
  );
}

export default CounterChip;
