const ChartDropDown = ({ chartType, setChartType }) => {
  return (
    <select
      className="drop-down"
      value={chartType}
      onChange={(e) => {
        setChartType(e.target.value);
      }}
    >
      <option value="pm_vs_category">PM vs Category</option>
      <option value="rsch_type">Research Type</option>
    </select>
  );
};

export default ChartDropDown;
