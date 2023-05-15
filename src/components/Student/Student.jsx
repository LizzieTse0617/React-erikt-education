import Examplebody from '../Achievement/Examplebody';
import { Box, Text, Button } from '@chakra-ui/react';

import student from './student.json';
import Goup from '../Rest/Goup';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
const apExamHeader = ['Students', 'Result', 'Subjects', 'School'];
const universityHeader = ['Students', 'Result', 'Level', 'Subjects', 'School'];

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
};

export default function Student() {
  return (
    <div className="student">
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
          All students achievement
        </Text>
        <p>
          To protect clients personal privacy, all rankings are only sorted by
          alphet only
        </p>
      </Box>

      <Box maxW="1200px" mx="auto" p="4">
        <Button border="1px" m="1" onClick={() => scrollToSection('ap')}>
          AP & SAT
        </Button>
        <Button border="1px" m="1" onClick={() => scrollToSection('ib')}>
          IB
        </Button>
        <Button border="1px" m="1" onClick={() => scrollToSection('igcsee')}>
          IGCSE (Edexcel)
        </Button>
        <Button border="1px" m="1" onClick={() => scrollToSection('igcsec')}>
          IGCSE (Cambridge)
        </Button>
        <Button border="1px" m="1" onClick={() => scrollToSection('cie')}>
          CIE
        </Button>
        <Button border="1px" m="1" onClick={() => scrollToSection('gce')}>
          GCE
        </Button>
        <Button border="1px" m="1" onClick={() => scrollToSection('u')}>
          University admission
        </Button>
      </Box>

      <Box id="ap">
        <Examplebody />
      </Box>
      <Box maxW="1200px" mx="auto" p="4">
        <Box>
          <TableContainer>
            <Table colorScheme="teal" mt="4">
              <Thead>
                <Tr>
                  {apExamHeader.map((property) => (
                    <Th key={property}>{property}</Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {student.apExam.map((array) =>
                  array.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.students}</Td>
                      <Td>{item.result}</Td>
                      <Td>{item.subjects}</Td>
                      <Td>{item.school}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box id="ib" mt="14">
          <Text
            as="h4"
            fontSize={{ sm: '1.5rem', md: '1.8rem', lg: '2rem' }}
            mb="4"
            fontWeight="600"
            borderBottom="1px"
            pt={{ sm: '3rem', md: '4rem', lg: '5rem' }}
          >
            IB Examination
          </Text>
          <TableContainer>
            <Table colorScheme="teal" mt="4">
              <Thead>
                <Tr>
                  {apExamHeader.map((property) => (
                    <Th key={property}>{property}</Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {student.ibExam.map((array) =>
                  array.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.students}</Td>
                      <Td>{item.result}</Td>
                      <Td>{item.subjects}</Td>
                      <Td>{item.school}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box id="igcsee" mt="14">
          <Text
            as="h4"
            fontSize={{ sm: '1.5rem', md: '1.8rem', lg: '2rem' }}
            mb="4"
            fontWeight="600"
            borderBottom="1px"
            pt={{ sm: '3rem', md: '4rem', lg: '5rem' }}
          >
            IGCSE(Edexcel) Examination
          </Text>
          <TableContainer>
            <Table colorScheme="teal" mt="4">
              <Thead>
                <Tr>
                  {apExamHeader.map((property) => (
                    <Th key={property}>{property}</Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {student.igcseEExam.map((array) =>
                  array.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.students}</Td>
                      <Td>{item.result}</Td>
                      <Td>{item.subjects}</Td>
                      <Td>{item.school}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box id="igcsec" mt="14">
          <Text
            as="h4"
            fontSize={{ sm: '1.5rem', md: '1.8rem', lg: '2rem' }}
            mb="4"
            fontWeight="600"
            borderBottom="1px"
            pt={{ sm: '3rem', md: '4rem', lg: '5rem' }}
          >
            IGCSE(Cambridge) Examination
          </Text>
          <TableContainer>
            <Table colorScheme="teal" mt="4">
              <Thead>
                <Tr>
                  {apExamHeader.map((property) => (
                    <Th key={property}>{property}</Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {student.igcseCExam.map((array) =>
                  array.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.students}</Td>
                      <Td>{item.result}</Td>
                      <Td>{item.subjects}</Td>
                      <Td>{item.school}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box id="cie" mt="14">
          <Text
            as="h4"
            fontSize={{ sm: '1.5rem', md: '1.8rem', lg: '2rem' }}
            mb="4"
            fontWeight="600"
            borderBottom="1px"
            pt={{ sm: '3rem', md: '4rem', lg: '5rem' }}
          >
            CIE Examination
          </Text>
          <TableContainer>
            <Table colorScheme="teal" mt="4">
              <Thead>
                <Tr>
                  {apExamHeader.map((property) => (
                    <Th key={property}>{property}</Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {student.cieExam.map((array) =>
                  array.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.students}</Td>
                      <Td>{item.result}</Td>
                      <Td>{item.subjects}</Td>
                      <Td>{item.school}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box id="gce" mt="14">
          <Text
            as="h4"
            fontSize={{ sm: '1.5rem', md: '1.8rem', lg: '2rem' }}
            mb="4"
            fontWeight="600"
            borderBottom="1px"
            pt={{ sm: '3rem', md: '4rem', lg: '5rem' }}
          >
            GCE Examination
          </Text>
          <TableContainer>
            <Table colorScheme="teal" mt="4">
              <Thead>
                <Tr>
                  {apExamHeader.map((property) => (
                    <Th key={property}>{property}</Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {student.gceExam.map((array) =>
                  array.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.students}</Td>
                      <Td>{item.result}</Td>
                      <Td>{item.subjects}</Td>
                      <Td>{item.school}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box id="u" mt="14">
          <Text
            as="h4"
            fontSize={{ sm: '1.5rem', md: '1.8rem', lg: '2rem' }}
            mb="4"
            fontWeight="600"
            borderBottom="1px"
            pt={{ sm: '3rem', md: '4rem', lg: '5rem' }}
          >
            University Admission
          </Text>
          <TableContainer>
            <Table colorScheme="teal" mt="4">
              <Thead>
                <Tr>
                  {universityHeader.map((property) => (
                    <Th key={property}>{property}</Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {student.university.map((array) =>
                  array.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.name}</Td>
                      <Td>{item.result}</Td>
                      <Td>{item.level}</Td>
                      <Td>{item.subject}</Td>
                      <Td>{item.school}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Goup />
    </div>
  );
}
