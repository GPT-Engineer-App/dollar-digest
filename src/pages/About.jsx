import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" mb={4}>About Us</Heading>
      <Text fontSize="lg">
        Financial Times is a leading global business publication, known for its
        in-depth analysis, insightful commentary, and comprehensive coverage of
        financial markets, industries, and world events.
      </Text>
    </Container>
  );
};

export default About;