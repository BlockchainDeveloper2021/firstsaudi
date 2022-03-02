import "./ChartBar.css";
const ChartBar = (props) => {
  let hight = "0%";
  if (props.maxValue > 0) {
    hight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div chassName="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: hight }}></div>
      </div>
      <div className="chart-bar__label"></div>
    </div>
  );
};

export default ChartBar;
