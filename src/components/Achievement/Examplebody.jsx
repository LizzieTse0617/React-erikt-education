import { useState, useEffect } from 'react';
import data from './data.json';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Examplebody() {
  const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  };

  const [activeYear, setActiveYear] = useState('2023');
  const [activeTab, setActiveTab] = useState('2023');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    loadData('2023'); // Load data for the initial year '2022'
  }, []);

  const loadData = (value) => {
    setActiveYear(value);
    setTableData(data.filter((item) => item.year === Number(value)));
    setActiveTab(value);
  };

  return (
    <div>
      <Box alignItems="center" maxW="1200px" mx="auto" p="4">
        <Text
          as="h4"
          fontSize={{ sm: '1.5rem', md: '1.8rem', lg: '2rem' }}
          mb="4"
          fontWeight="600"
          borderBottom="1px"
          pt={{ sm: '3rem', md: '4rem', lg: '5rem' }}
        >
          AP Examination
        </Text>
      </Box>

      <Box
        className="btn-group"
        flexDirection={{ base: 'column', md: 'row' }}
        mt={{ sm: '0rem', md: '0rem' }}
        mb={{ sm: '0rem', md: '0rem' }}
        alignItems="center"
        maxW="1200px"
        mx="auto"
        p="4"
      >
        <Button
          className="btn"
          m="0.1rem"
          style={{
            backgroundColor: activeTab === '2023' ? '#5151f9' : '#edecfe',
            color: activeTab === '2023' ? '#ffffff' : '#1A202C',
            fontSize: activeTab === '2023' ? '1.5rem' : '1rem',
          }}
          onClick={() => loadData('2023')}
        >
          2023
        </Button>
        <Button
          className="btn"
          m="0.1rem"
          style={{
            backgroundColor: activeTab === '2022' ? '#5151f9' : '#edecfe',
            color: activeTab === '2022' ? '#ffffff' : '#1A202C',
            fontSize: activeTab === '2022' ? '1.5rem' : '1rem',
          }}
          onClick={() => loadData('2022')}
        >
          2022
        </Button>
        <Button
          className="btn"
          m="0.1rem"
          style={{
            backgroundColor: activeTab === '2021' ? '#5151f9' : '#edecfe',
            color: activeTab === '2021' ? '#ffffff' : '#1A202C',
            fontSize: activeTab === '2021' ? '1.5rem' : '1rem',
          }}
          onClick={() => loadData('2021')}
        >
          2021
        </Button>
        <Button
          className="btn"
          m="0.1rem"
          style={{
            backgroundColor: activeTab === '2020' ? '#5151f9' : '#edecfe',
            color: activeTab === '2020' ? '#ffffff' : '#1A202C',
            fontSize: activeTab === '2020' ? '1.5rem' : '1rem',
          }}
          onClick={() => loadData('2020')}
        >
          2020
        </Button>
        <Button
          className="btn"
          m="0.1rem"
          style={{
            backgroundColor: activeTab === '2019' ? '#5151f9' : '#edecfe',
            color: activeTab === '2019' ? '#ffffff' : '#1A202C',
            fontSize: activeTab === '2019' ? '1.5rem' : '1rem',
          }}
          onClick={() => loadData('2019')}
        >
          2019
        </Button>
      </Box>
      <Box
        mt={{ sm: '0rem', md: '0rem' }}
        mb={{ sm: '1rem', md: '0rem' }}
        flexDirection={{ sm: 'column', md: 'row' }}
        alignItems="center"
        maxW="1200px"
        mx="auto"
        p="4"
      >
        {tableData.map((item) => (
          <div className="list" key={item.id}>
            <Grid
              mb={{ sm: '0rem', md: '0.5rem', lg: '1rem' }}
              templateColumns={{
                sm: '0.12fr 0.2fr 0.65fr',
                md: '0.5fr 1fr 0.15fr 0.4fr 1fr',
                lg: '0.7fr 1fr 0.15fr 0.4fr 1fr',
              }}
              templateRows={{
                sm: '2.5fr 0.3fr 0.3fr',
                md: '1fr 1fr 1fr',
                lg: '1fr 1fr',
              }}
              border="1px"
              p="0.5rem"
              borderColor="gray.400"
              gap={{ sm: '0.1rem', md: '0.3rem', lg: '0.5rem' }}
              flexDirection={{ sm: 'column', md: 'row' }}
              templateAreas={{
                sm: `"title title studentname" "lv5 lv5student feature" "lv4 lv4student feature" `,
                md: `"title feature lv5 lv5student studentname"
         "title feature lv4 lv4student studentname"`,
              }}
            >
              <GridItem
                fontWeight="bold"
                fontSize={{ sm: '1.2rem', md: '1.35rem', lg: '1.5rem' }}
                area={'title'}
                minWidth="8rem"
              >
                {item.name}
              </GridItem>
              <GridItem
                fontWeight="bold"
                area={'feature'}
                fontSize={{ sm: '0.9rem', md: '1rem', lg: '1rem' }}
              >
                <Text as="h3" mb="4">
                  {item.feature}
                </Text>
              </GridItem>
              <GridItem area={'lv5student'} fontSize={'0.8rem'}>
                {item.lv5student} student(s)
              </GridItem>
              <GridItem area={'lv4'}>
                <Image
                  src="../../../public/img/lv4.svg"
                  alt="Erik-t-education.hk-level4-icon"
                  height="1.5rem"
                />
              </GridItem>
              <GridItem area={'lv5'}>
                <Image
                  src="../../../public/img/lv5.svg"
                  alt="Erik-t-education.hk-level5-icon"
                  height="1.5rem"
                />
              </GridItem>
              <GridItem area={'lv4student'} fontSize={'0.8rem'}>
                {item.lv4student} student(s)
              </GridItem>
              <GridItem
                area={'studentname'}
                fontSize={'14px'}
                style={{
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word',
                  wordBreak: 'break-word',
                }}
              >
                ICS student:
                {item.studentName}
              </GridItem>
            </Grid>
          </div>
        ))}
      </Box>
    </div>
  );
}
