import './rest.css';
import { Box, Text } from '@chakra-ui/react';
export default function Online() {
  return (
    <div className="online-tutoring">
      <Box
        p="3"
        pt={{ sm: '3rem', md: '8rem' }}
        pb={{ sm: '3rem', md: '8rem' }}
        flexDirection={{ base: 'column', md: 'row' }}
        maxW="1200px"
        mx="auto"
      >
        <Text as="h2" fontSize={{ sm: '2xl', md: '2.5xl', lg: '3xl' }} mb="4">
          HOME & ONLINE TUTORING
        </Text>

        <p>
          We provide home & online tutoring services to students in outer areas.
          Our students from different location: Shatin, Fo Tan, Ma On Shan, Tai
          Po, Tai Wai, Kowloon Tong, Ho Man Tin, UK boarding school
        </p>
        <p>
          無論你居住香港或甚至外國，
          我們的導師可以上門或者透過視像和學生補習。我們的學生來自以下地區：
          沙田、火炭、馬鞍山、大埔、大圍、九龍塘、何文田、海外升學
        </p>
      </Box>
    </div>
  );
}
