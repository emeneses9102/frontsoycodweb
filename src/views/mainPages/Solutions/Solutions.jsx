import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '../../../common/Container';
import { Hero, Soluciones, Customers, WhyWe } from './components';

const Solutions = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  return (
    <Box>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Soluciones />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Customers />
        </Container>
      </Box>
      <Container>
        <WhyWe />
      </Container>
    </Box>
  );
};

Solutions.propTypes = {
  themeMode: PropTypes.string.isRequired,
};
export default Solutions;
