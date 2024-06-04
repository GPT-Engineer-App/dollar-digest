import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" mb={4}>Contact Us</Heading>
      <Text fontSize="lg">
        For inquiries, please email us at contact@financialtimes.com or call us
        at (123) 456-7890.
      </Text>
    </Container>
  );
};

export default Contact;