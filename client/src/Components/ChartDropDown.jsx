import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
// import { useState, useEffect } from "react";


const ChartDropDown = ({ chartType, setChartType }) => {
  // const [chartType, setChartType] = useState("pm_vs_category");
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:5000/api/data?chart_type=${chartType}`)
  //   .then((res) => {
  //     setData(res.data)
  //     return chartData
  //   })
  //   .catch(err => console.log(err))
  // }, [chartType])

  return (
    <select
      className="drop-down"
      value={chartType}
      onChange={
        (e) => {
          setChartType(e.target.value)
        }
      }
    >
      <option value="pm_vs_category">PM vs Category</option>
      <option value="rsch_type">Research Type</option>
    </select>
    // <Menu id="chartSelect" onChange={fetchChartData}>
    //   <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    //     View Charts
    //   </MenuButton>
    //   <MenuList>
    //     <MenuItem value="pm_vs_category">PM vs Category</MenuItem>
    //     <MenuItem value="rsch_type">Research Type</MenuItem>
    //   </MenuList>
    // </Menu>
  );
};

export default ChartDropDown;
