import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Dashboard = () => {

  const dashboardData = useLoaderData()
  console.log(dashboardData)
  const [data, setData] = useState(dashboardData)
  // console.log('THIS IS FROM MY USE STATE', data[0].PM_NAME_1)

  // barchart data for pm name and category
//   let sum = 0
  const xArray = []
  const yArray = []

//   // array for all project managers
for (let i = 0; i < data.length; i++) {
  // for each pm add the number of categories they have
  xArray.push(data[i].project_manager)
  yArray.push(data[i].count)
}

console.log(xArray)
console.log(yArray)


// for each projectt manager, add to the total number of projects they have to get a final sum
  return (

      <Box>
<Text>This is my dashboard page</Text>
      <ul>
        {/* {data.map((item, index) => (
          <li key={index}>
            {item.PI_NAME} – {item.SHORT_TITLE}
          </li>
        ))} */}
      </ul>

      </Box>
  );
};

export default Dashboard;
