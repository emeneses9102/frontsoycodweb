import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '../../../common/Container';
import { Hero } from './components';

const Headline = React.lazy(() => import('./components/Headline'));
const Highlights = React.lazy(() => import('./components/Highlights'));
const About = React.lazy(() => import('./components/About'));
const Features = React.lazy(() => import('./components/Features'));
const Services = React.lazy(() => import('./components/Services'));
const Footer = React.lazy(() => import('./components/Footer'));

const Home = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  useEffect(() => {
    document.title = "Somos un integrador de soluciones";  
  }, []);

  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <About />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Headline />
        </Container>
        <Container>
          <Highlights />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Box position={'relative'} bgcolor={theme.palette.alternate.main}>
        <Container paddingX={'0 !important'} maxWidth={'100%'}>
          <Services themeMode={themeMode} />
        </Container>
      </Box>
      <Container>
        <Footer />
      </Container>
    </Box>
  );
};
Home.propTypes = {
  themeMode: PropTypes.string.isRequired,
};
export default Home;
