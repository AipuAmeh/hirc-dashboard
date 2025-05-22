import { Link, Box, Flex } from "@chakra-ui/react"


const Header = () => {
    return (
      <Flex gap="4" justify="space-between" p={5} shadow={"md"}>
      <Box height="10" width="40" marginEnd="auto">Logo</Box>
      <Box height="10" width="40"  >Home</Box>
      <Box height="10" width="40">Dashboard</Box> 
    </Flex>
    )
}

export default Header