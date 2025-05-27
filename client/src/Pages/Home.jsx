import { Box, Flex, Text, Grid, GridItem, Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box px={'2em'} h='100%'>
      <Text fontSize="3em" mt={"1em"} color='brand.deepBurgundy' fontWeight={'500'}>
        IntelliScope: A Dashboard for Project Managers
      </Text>
      <Flex gap="5em" mt="4em">
        <Box flex="1">
          <Text fontSize="2em" textAlign={"left"} mt={'4em'}>
            This project serves as an interactive dashboard to faciliate the
            drill down analysis for project managers.
          </Text>
        </Box>
        <Box flex="1">
            <Text fontSize="2em" mb={'2rem'}>This Aims To:</Text>
          <Stack>
            <Box display="flex" flexDirection="row" gap="1em" mb='2rem'>
              <Box
                background="brand.watermelonGreen"
                width="2.5rem" 
                height="2rem" 
                p={'1.25em'}
              ></Box>
              <Text textAlign={"left"} fontSize={"1.3em"}>
                Make the process of extracting data easier.
              </Text>
            </Box>
            <Box display="flex" flexDirection="row" gap="1.2em" mb='2rem'>
              <Box
                background="brand.summerPink"
                width="2.5rem" 
                height="2rem"
                p={'1.25em'}
              ></Box>
              <Text textAlign={"left"} fontSize={"1.3em"}>
                Increase efficiency of viewing projects and summarizing
                performance metrics of research core.
              </Text>
            </Box>
            <Box display="flex" flexDirection="row" gap="1.1em" mb='2rem'>
              <Box
                background="brand.twinkleBlue"
                width="2.5rem"
                height="2rem" 
                p={'1.25em'}
              ></Box>
              <Text textAlign={"left"} fontSize={"1.3em"}>
                Provide real-time information for project managers and HIRC
                leaders.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
