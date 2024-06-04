import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={8}>
      <Flex direction="column" align="center">
        <Text mb={2}>© 2023 Financial Times</Text>
        <Flex>
          <Link href="/about" px={2}>
            About
          </Link>
          <Link href="/contact" px={2}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;