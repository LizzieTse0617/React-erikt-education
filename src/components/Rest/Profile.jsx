import { Box, Text } from '@chakra-ui/react';
import React from 'react';
export default function Profile() {
  const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  };
  return (
    <div>
      <Box
        p="4"
        mt={{ sm: '3rem', md: '8rem' }}
        mb={{ sm: '3rem', md: '8rem' }}
        maxW="1200px"
        mx="auto"
      >
        <Text as="h2" fontSize={{ sm: '2xl', md: '2.5xl', lg: '3xl' }} mb="4">
          ERIK T
        </Text>
        <Text as="h3" fontSize={{ sm: '1.5xl', md: '1.8xl', lg: '2xl' }} mb="4">
          Science & Mathematics Specialist
        </Text>

        <p>
          Our chief science expert Erik T. (MPhil (Chemistry), HKU BSc, HKU) has
          long experience in coaching AP/SAT/ GCE-AL/ IB/ IGCSE courses and
          Summer school science workshop. In addition to teaching experience, he
          got three A*s in Edexcel IGCSE Science and Math, and brilliant results
          in A-Level Math and Science. He graduated from the University of Hong
          Kong with MPhil (major in Chemistry). In his teaching, Erik
          incorporates both theory and research experience.
        </p>
      </Box>
    </div>
  );
}
