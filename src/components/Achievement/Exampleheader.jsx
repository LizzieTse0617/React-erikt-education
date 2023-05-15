import { Box, Text, Link } from '@chakra-ui/react';

export default function Exampleheader() {
  return (
    <div>
      <Box
        mt={{ sm: '0rem', md: '0rem' }}
        mb={{ sm: '0rem', md: '0rem' }}
        flexDirection={{ sm: 'column', md: 'row' }}
        alignItems="center"
        maxW="1200px"
        mx="auto"
        p="4"
      >
        <Text as="h2" fontSize={{ sm: '2xl', md: '2.5xl', lg: '3xl' }}>
          Students achievement
        </Text>
        <p>
          To protect clients personal privacy, all rankings are only sorted by
          alphet only
        </p>
        <Link
          className="btn"
          href="/student"
          color="white"
          bg="teal.400"
          p="1rem"
          borderRadius="0.8rem"
        >
          Click here for more students achievement →
        </Link>
      </Box>
    </div>
  );
}
