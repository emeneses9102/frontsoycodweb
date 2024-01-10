import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '../../../common/Container';
import { Hero, Registration} from './components';
const Event = React.lazy(() => import('./components/Event'));
const fullEvents = [
  'eventos:sd-branch-secure',
  'eventos:dHCI-lounge',
  'eventos:aruba-clear-pass',
  'eventos:brunch-ciberseguridad',
  'eventos:wan-inalambrica-cradlepoint',
  'eventos:franquiciados-latam-2022'
];

const Events = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        minHeight={{ xs: 'auto', md: 'calc(100vh - 64px)' }}
        height={'auto'}
        position={'relative'}
        sx={{
          backgroundImage:
            'url("https://assets.maccarianagency.com/backgrounds/img19.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
          '&:after': {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100%',
            width: '100%',
            content: '" "',
            zIndex: 1,
            backgroundColor: theme.palette.primary.dark,
            backgroundAttachment: 'fixed',
            opacity: 0.7,
          },
        }}
      >
        <Box
          position={{ xs: 'relative', md: 'absolute' }}
          top={{ xs: 0, md: '50%' }}
          width={'100%'}
          height={'auto'}
          sx={{
            transform: { md: 'translateY(-50%)' },
          }}
          zIndex={2}
        >
          <Container>
            <Hero />
          </Container>
        </Box>
      </Box>

      <Box>
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
      <Container>
        <Registration />
      </Container>
    </Box>
  );
};

export default Events;
