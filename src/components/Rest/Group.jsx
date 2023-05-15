import { Box, Text } from '@chakra-ui/react';
export default function Group() {
  return (
    <div className="group-lesson">
      <Box
        p="4"
        pt={{ sm: '3rem', md: '8rem' }}
        pb={{ sm: '3rem', md: '8rem' }}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        <Text as="h2" fontSize={{ sm: '2xl', md: '2.5xl', lg: '3xl' }} mb="4">
          1:1 / GROUP LESSONS*
        </Text>

        <Text as="h3" fontSize={{ sm: '1.5xl', md: '1.8xl', lg: '2xl' }} mb="4">
          Group lesson * (Max. 4 students) Group your peers and form a study
          group!
        </Text>

        <p>
          We provide quality tutoring service in private and small group
          formats. Tailored made approach are formed to our students come from
          leading international and independent schools in Hong Kong and abroad.
          You are welcome to contact with us for more course information.
        </p>
        <p>
          我們提倡上門私人及小班教學。學生均來自香港頂尖國際學校及中小學。自成立以來，
          我們的學生成績普遍顯著改善。 歡迎聯絡我們獲取更多課程資訊!
        </p>
      </Box>
    </div>
  );
}
