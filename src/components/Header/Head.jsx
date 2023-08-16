import { Icon } from '@chakra-ui/react';
import './head.css';
import React from 'react';
import { Highlight } from '@chakra-ui/react';
import { RiWhatsappFill } from 'react-icons/ri';
export default function Head() {
  return (
    <div className="sticky-paragraph">
      To avoid disturbing classes, you are welcome to Whatsapp us first before
      CALLING. Whatsapp:
      <Icon as={RiWhatsappFill} color="green.300" />
      <Highlight
        query="+852-9629-1557"
        styles={{
          px: '2',
          py: '1',
          color: 'white',
          bg: 'blue.900',
        }}
      >
        +852-9629-1557
      </Highlight>
    </div>
  );
}
