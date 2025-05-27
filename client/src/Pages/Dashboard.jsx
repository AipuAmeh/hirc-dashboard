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
    <Box px={'2em'}>
      <Text fontSize={"3em"} mt={"1em"} mb={"1em"} color='brand.deepBurgundy' fontWeight={'500'}>
        IntelliScope
      </Text>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Box h='100%' w='80%' bg='brand.gray'>
            <Text mt={"3em"} fontSize={"1.5em"}>
              Side Panel
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Box>
            <BarChart xData={xArray} yData={yArray} />
          </Box>
        </GridItem>
        <GridItem>
                <Box bg='gray'>
        <Text>Results Summary</Text>
      </Box>
        </GridItem>
      </Grid>

    </Box>
  );
};

export default Dashboard;
