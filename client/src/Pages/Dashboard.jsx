import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import React from "react";
import Plot from "react-plotly.js";
import BarChart from "../Components/BarChart";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const dashboardData = useLoaderData();
  console.log(dashboardData);
  const [data, setData] = useState(dashboardData);

  // barchart data for pm name and category
  const xArray = [];
  const yArray = [];

  // array for all project managers
  for (let i = 0; i < data.length; i++) {
    // for each pm add the number of categories they have
    xArray.push(data[i].project_manager);
    yArray.push(data[i].count);
  }

  return (
    <Box>
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <Box>
          <Text mt={"3em"} fontSize={"1.5em"}>
            Side Panel
          </Text>
        </Box>
      </GridItem>
      <GridItem colSpan={4}>
        <Box>
          <Text fontSize={"3em"} mt={"1em"} mb={"1em"}>
            IntelliScope
          </Text>
          <BarChart xData={xArray} yData={yArray} />
        </Box>
      </GridItem>
    </Grid>
    </Box>

  );
};

export default Dashboard;
