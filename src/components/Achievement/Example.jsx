import { useState, useEffect } from 'react';
import data from './data.json';
import Exampleheader from './Exampleheader';
import Examplebody from './Examplebody';
import { Box, Image, Text, Button } from '@chakra-ui/react';

import { Grid, GridItem } from '@chakra-ui/react';

const TableComponent = () => {
  const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  };
  const [activeYear, setActiveYear] = useState('2022');
  const [activeTab, setActiveTab] = useState('2022');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    loadData('2022'); // Load data for the initial year '2022'
  }, []);

  const loadData = (value) => {
    setActiveYear(value);
    setTableData(data.filter((item) => item.year === Number(value)));
    setActiveTab(value);
  };

  return (
    <div className="achievement">
      <Exampleheader />

      <Examplebody />
    </div>
  );
};

export default TableComponent;
