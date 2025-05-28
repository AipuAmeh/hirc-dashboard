import React from "react";
import Plot from "react-plotly.js";

const PieChart = ({ yData, xData }) => {
  return (
    <Plot
      data={[
        {
          values: yData,
          labels: xData,
          hole: .4,
          type: "pie",
          marker: { colors: ['#71B54A', '#CA3C6A', '#03A9C9' ]},
        },
      ]}
      layout={{
        title: { text: "Research Types" },
      }}
    ></Plot>
  );
};

export default PieChart;
