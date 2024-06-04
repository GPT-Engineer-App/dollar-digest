import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Box>
          <Heading as="h1" mb={4}>Featured Articles</Heading>
          <Text fontSize="lg">
            Welcome to Financial Times. Stay tuned for the latest updates in
            finance, business, and global markets.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" mb={4}>Latest News</Heading>
          <Text fontSize="lg">
            Catch up on the latest news and trends in the financial world.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;