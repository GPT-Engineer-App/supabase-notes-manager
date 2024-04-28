// Complete the Index page component here
// Use chakra-ui
import { Button, Box, Text } from "@chakra-ui/react"; // example
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa"; // example - use react-icons/fa for icons

const Index = () => {
  // TODO: Create the website here!
  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>Welcome to the Note App!</Text>
      <Link to="/notes">
        <Button colorScheme="teal">Go to Notes</Button>
      </Link>
    </Box>
  ); // example
};

export default Index;