import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const datavalue = props.dataPoints.map((datapoint) => datapoint.value);
  const MaxValue = Math.Max(...datavalue);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={MaxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
