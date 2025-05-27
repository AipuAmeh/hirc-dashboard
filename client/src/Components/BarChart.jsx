import React from "react"
import Plot from "react-plotly.js"

const BarChart = ({ xData, yData }) => {
    return (
               <Plot
            data={[{ 
              type: "bar",
              x: xData, 
              y: yData,
              marker: {color: '#03A9C9'}, }]}
            layout={{
              title:{text: "A Project Manager's Task Load"},
              xaxis: {
                 title:{ text: "Project Managers" }
                },
              yaxis: { 
                title: {text: "# of Research Categories" },
              },
              autosize: true,
              margin: { t: 50, l: 50, r: 30, b: 50 },
            }}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}
            config={{ responsive: true }}
          />

    )
}

export default BarChart