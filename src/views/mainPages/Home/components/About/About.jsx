import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '../../../../../common/Container';
import { Gallery, Headline, Numbers} from './components';

const About = () => {
  return (
    <Box>
      <Container>
        <Headline />
      </Container>
      <Container paddingY={'0 !important'}>
        <Gallery />
      </Container>
      <Container maxWidth={'800px !important'} paddingBottom={'0 !important'}>
        <Numbers />
        <Container>
          <Divider />
        </Container>
      </Container>
    </Box>
  );
};

export default About;
