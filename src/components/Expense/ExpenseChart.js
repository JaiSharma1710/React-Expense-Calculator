import React from "react";
import Chart from "../Charts/Chart";

const ChartBar = (props) => {
  const ChartDataPoint = [
    { lable: "Jan", value: 0 },
    { lable: "Feb", value: 0 },
    { lable: "Mar", value: 0 },
    { lable: "Apr", value: 0 },
    { lable: "May", value: 0 },
    { lable: "Jun", value: 0 },
    { lable: "Jul", value: 0 },
    { lable: "Aug", value: 0 },
    { lable: "Sep", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", value: 0 },
  ];

  for (let element of props.expenses) {
    const month = element.date.getMonth();
    ChartDataPoint[month].value += element.amount;
  }

  return <Chart dataPoint={ChartDataPoint} />;
};

export default ChartBar;
