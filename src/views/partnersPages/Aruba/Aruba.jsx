import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '../../../common/Container';
import { Hero, Reviews, Overview } from './components';

const Aruba = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={'alternate.dark'}>
        <Container>
          <Hero />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.default}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Box>
        <Container>
          <Reviews />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main}>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            transform: 'scaleY(-1)',
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
        <Container>
          <Overview themeMode={themeMode} />
        </Container>
      </Box>
    </Box>
  );
};

Aruba.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Aruba;
