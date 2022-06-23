import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValue = props.dataPoint.map((element) => element.value);
  const MaxValue = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoint.map((element) => {
        return (
          <ChartBar
            key={element.lable}
            lable={element.lable}
            value={element.value}
            maxValue={MaxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
