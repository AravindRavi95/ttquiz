import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

var data = [
  ["Element", "Weak 1", "Weak 2"],
  ["Team 1", 20, 15], // RGB value
  ["Team 2", 10, 25], // English color name
  ["Team 3", 20, 40]
];

export default class ChartSheet extends React.PureComponent {
  constructor(props) {
    super(props);

    /* this.state = {
      data,
    }; */
  }

  render() {
    return (
      <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
          options={{
            isStacked: true,
            title: "Weekly Score Card",
            legend: "bottom",
          }}
        />
    );
  }
}