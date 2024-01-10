import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '../../../common/Container';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Hero } from './components';
const Event = React.lazy(() => import('./components/Event'));

const fullEvents = [
  'eventos:testerjson4',
  'eventos:testerjson2',
  'eventos:testerjson3',
  'eventos:testerjson',
];

const AllEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();

  return (
    <Box>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <Hero />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '25%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>
      {fullEvents.map((eventName, i) => (
        <Box
          key={i}
          bgcolor={theme.palette.background.paper}
          position={'relative'}
        >
          <Container position="relative" zIndex={2}>
            <Event nameEventQuery={eventName} />
          </Container>
          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1900"
            sx={{
              position: 'absolute',
              width: '100%',
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 1,
              height: '100%',
            }}
          >
            <polygon
              fill={theme.palette.alternate.main}
              points="0,0 2000,2000 0,1921"
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

AllEvents.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default AllEvents;
