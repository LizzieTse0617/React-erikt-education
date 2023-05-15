import { Box, Text, Grid, Flex, Container } from '@chakra-ui/react';
export default function Subject() {
  const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  };
  return (
    <Box
      p="4"
      mt={{ sm: '3rem', md: '8rem' }}
      mb={{ sm: '3rem', md: '8rem' }}
      maxW="1200px"
      mx="auto"
    >
      <Text as="h2" fontSize={{ sm: '2xl', md: '2.5xl', lg: '3xl' }} mb="4">
        TEACHING SUBJECTS
      </Text>
      <Text as="h3" fontSize={{ sm: '1.5xl', md: '1.8xl', lg: '2xl' }} mb="4">
        AP, SAT , GCE-AL, (I)GCSE, GCSE
      </Text>

      <Grid
        templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap="4"
        mt="4"
      >
        <Box
          bg="gray.100"
          height="40px"
          width="100%"
          textAlign="center"
          padding="0.5rem"
          fontWeight="bold"
        >
          Chemistry
        </Box>
        <Box
          bg="gray.100"
          height="40px"
          width="100%"
          textAlign="center"
          padding="0.5rem"
          fontWeight="bold"
        >
          Biology
        </Box>
        <Box
          bg="gray.100"
          height="40px"
          width="100%"
          textAlign="center"
          padding="0.5rem"
          fontWeight="bold"
        >
          Physics
        </Box>
        <Box
          bg="gray.100"
          height="40px"
          width="100%"
          textAlign="center"
          padding="0.5rem"
          fontWeight="bold"
        >
          Mathematics
        </Box>
        <Box
          bg="gray.100"
          height="40px"
          width="100%"
          textAlign="center"
          padding="0.5rem"
          fontWeight="bold"
        >
          Statistics
        </Box>
        <Box
          bg="gray.100"
          height="40px"
          width="100%"
          textAlign="center"
          padding="0.5rem"
          fontWeight="bold"
        >
          Calculus AB
        </Box>
        <Box
          bg="gray.100"
          height="40px"
          width="100%"
          textAlign="center"
          padding="0.5rem"
          fontWeight="bold"
        >
          Calculus BC
        </Box>
        <Box
          bg="gray.100"
          height="40px"
          width="100%"
          textAlign="center"
          padding="0.5rem"
          fontWeight="bold"
        >
          Physics
        </Box>
      </Grid>
    </Box>
  );
}
