import { Icon, Button } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import React from 'react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'auto' });
};
export default function Goup() {
  return (
    <div>
      <Button
        onClick={scrollToTop}
        position="fixed"
        bottom="1rem"
        right="1rem"
        borderRadius="full"
        w="5rem"
        h="5rem"
        bg="gray.500"
        _hover={{ bg: 'gray.600' }}
        _active={{ bg: 'gray.700' }}
      >
        <Icon as={FaArrowUp} color="white" />
      </Button>
    </div>
  );
}
