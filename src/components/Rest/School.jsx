import { Grid, Text, GridItem, Box } from '@chakra-ui/react';
import './rest.css';
export default function School() {
  const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  };
  return (
    <div className="table">
      <Box
        p="4"
        mt={{ sm: '3rem', md: '0rem' }}
        mb={{ sm: '3rem', md: '0rem' }}
        pt={{ sm: '3rem', md: '5rem' }}
        pb={{ sm: '3rem', md: '5rem' }}
        maxW="1200px"
        mx="auto"
      >
        <Text as="h2" fontSize={{ sm: '2xl', md: '2.5xl', lg: '3xl' }} mb="4">
          OUR STUDENTS COME FROM
        </Text>

        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap="4"
          mt="4"
        >
          <Box width="100%" padding="0.5rem">
            <ul>
              <Text as="h5" fontWeight="700">
                International School:
              </Text>
              <li>International Christian School</li>
              <li>Hong Kong International School</li>
              <li>Island School</li>
              <li>South Island School</li>
              <li>Shatin College</li>
              <li>Renaissance College</li>
              <li>German Swiss International School</li>
              <li>Kiangsu & Chekiang International School</li>
            </ul>
          </Box>
          <Box width="100%" padding="0.5rem">
            <ul>
              <Text as="h5" fontWeight="700">
                Boarding School:
              </Text>
              <li>Tonbridge School</li>
              <li>Brighton College</li>
              <li>Badminton School</li>
              <li>Sherborne School</li>
              <li>Cheltenham Ladies College</li>
              <li>Headington</li>
              <li>Bede’s School</li>
              <li>Kent College</li>
              <li>Abingdon School</li>
            </ul>
          </Box>
          <Box width="100%" padding="0.5rem">
            <ul>
              <Text as="h5" fontWeight="700">
                Local School:
              </Text>
              <li>Lasalle College</li>
              <li>Mary Mount</li>
              <li>St. Paul Co-education</li>
              <li>St. Paul Convent</li>
            </ul>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
