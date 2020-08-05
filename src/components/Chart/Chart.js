import React from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends React.Component {
  render() {
    const options = {
      animationEnabled: true,
      backgroundColor: "#dae0ec",
      exportEnabled: false,
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "You are {y}% {label}!",
          dataPoints: [
            { y: this.props.metrics.breathtaking, label: "Breathtaking" },
            { y: this.props.metrics.awesome, label: "Awesome" },
            { y: this.props.metrics.amazeballs, label: "Amazeballs" },
            { y: this.props.metrics.phenomenal, label: "Phenomenal" },
            { y: this.props.metrics.mindblowing, label: "Mind-Blowing" },
          ],
        },
      ],
    };
    return <CanvasJSChart options={options} />;
  }
}

export default Chart;
