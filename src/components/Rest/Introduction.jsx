import { GridItem, Link, Text, Image, Box } from '@chakra-ui/react';

export default function Introduction() {
  const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  };

  return (
    <div className="introduction">
      <Box
        mt={{ sm: '3rem', md: '8rem' }}
        mb={{ sm: '3rem', md: '8rem' }}
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        maxW="1200px"
        mx="auto"
        p="4"
      >
        <Box flex="1" mr={{ base: '0', md: '4' }}>
          <GridItem pl="2" area={'text'}>
            <Text
              as="h1"
              fontWeight="bold"
              mb="4"
              fontSize={{ sm: '1.8rem', md: '1.8rem', lg: '1.8rem' }}
            >
              Leading Expert in AP/IB Science & Mathematics
            </Text>
            <Text as="h3" fontSize={{ sm: '1rem', md: '1.5rem', lg: '1.5rem' }}>
              AP, SAT , GCE AL, (I)GCSE, GCSE
            </Text>

            <p>
              Different kind of subjects of AP / SAT/ GCEAL/ IB / IGCSE / GCSE
              and other courses are now open for enrollment. Tailor made
              lecturing approach are formed to our students come from leading
              international and independent schools in Hong Kong and abroad in
              private and small group formats. 我們為國際、直資學校學生 (AP /
              SAT/ GCEAL/ IB / IGCSE / GCSE 課程等) 提供高質素補習課程，致力
              專科上門及小班教學。
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
          </GridItem>
        </Box>

        <Box flex="1" maxW="400px">
          <GridItem pl="0" area={'img'} m="5">
            <Image
              src="../../../public/img/erik_logo.png"
              alt="Erik-t-education.hk-logo"
              height="200px"
            />
          </GridItem>
        </Box>
      </Box>
    </div>
  );
}
