import { Link, Box, Flex, Image } from "@chakra-ui/react"


const Header = () => {
    return (
      <Flex gap="4" justify="space-between" p={5} shadow={"md"}>
      <Box height="10" width="40" marginEnd="auto">
        <Image src='logo.png' alt='dashboard-logo' height='50px'></Image>
      </Box>
      <Link href="/">
            <Box height="10" width="40"  >Home</Box>
      </Link>

      <Link href='/dashboard'>
      <Box height="10" width="40">Dashboard</Box> 
      </Link>
    </Flex>
    )
}

export default Header