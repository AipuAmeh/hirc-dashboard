import { Box, Flex, Text } from "@chakra-ui/react"

const Home = () => {
    return (
       <Box>
<Text fontSize='3em' mt={"1em"}>IntelliScope: A Dashboard for Project Managers</Text>
<Flex justifyContent={"space-between"}>
    <Box>
        Box 1
    </Box>
        <Box>
        Box 2
    </Box>
</Flex>
       </Box>
    )
}

export default Home;