import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import BarChart from "../Components/BarChart";
import ChartDropDown from "../Components/ChartDropDown";
import PieChart from "../Components/PieChart";

const Dashboard = () => {

  const [chartType, setChartType] = useState("pm_vs_category");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/api/data?chart_type=${chartType}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        return data;
      })
      .catch((err) => console.log(err));
  }, [chartType]);

  let chartContent = <Text>No Chart Available</Text>;

  if (chartType == "pm_vs_category" && data.length > 0) {
    // barchart data for pm name and category
    let xArray = data.map((item) => item.project_manager);
    let yArray = data.map((item) => item.count);

    chartContent = <BarChart xData={xArray} yData={yArray} />;
  } else if (chartType == 'rsch_type' && data.length > 0) {
    // pie chart for research types
    let xArray = data.map((item) => item.research_type)
    let yArray = data.map((item) => item.count)

    chartContent = <PieChart yData={yArray} xData={xArray} />
  }

  return (
    <Box px={"2em"} mb={"6em"} py={4}>
      <Text
        fontSize={"3em"}
        mt={"1em"}
        mb={"1em"}
        color="brand.deepBurgundy"
        fontWeight={"500"}
      >
        IntelliScope
      </Text>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem rowSpan={2} colSpan={1}>
          <Box h="85%" w="80%" bg="brand.pearl">
            <Text mt={"3em"} fontSize={"1em"} p={3} align={'left'}>
              Choose a Chart
            </Text>
            <Box display={'flex'} justifyContent={'flex-start'} pl={3}>
   <ChartDropDown chartType={chartType} setChartType={setChartType} />
            </Box>
         
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <Box>{chartContent}</Box>
        </GridItem>
        <GridItem col="true" colSpan={4}>
          <Box bg="brand.pearl" w="100%" h='100%' p={3}>
            <Text >Results Summary</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
