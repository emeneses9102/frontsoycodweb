import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import RouteIcon from '@mui/icons-material/Route';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import HubIcon from '@mui/icons-material/Hub';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Services1 = ({ themeMode = 'light' }) => {
  return (
    <Box>
      <Box marginBottom={4} marginTop={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h4'}
          gutterBottom
        >
          <Typography color="primary" variant="inherit" component="span">
          Automatización de 
          </Typography>{' '}
          Procesos lógicos
          <Typography component={'p'} marginTop={2}>
            
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Sistemas RPA para automatización de procesos lógicos',
            subtitle:
              '',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <RouteIcon />
              </svg>
            ),
            color: colors.amber,
          },
          {
            title: 'Robots sintácticos para automatización de procesos repetitivos',
            subtitle:
              '',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <ViewModuleIcon />
              </svg>
            ),
            color: colors.blueGrey,
          },
          {
            title: 'Desarrollo Web Servers para interconectar dispositivos a SAP',
            subtitle:
              '',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <AllInclusiveIcon />
              </svg>
            ),
            color: colors.blue,
          },
          {
            title: 'Mapeo de Procesos para de la automatización',
            subtitle:
              '',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <OpenInFullIcon />
              </svg>
            ),
            color: colors.green,
          },
          {
            title: 'Arquitectura de Dispositivos para Industria 4.0',
            subtitle:
              '',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <HubIcon />
              </svg>
            ),
            color: colors.pink,
          },
          {
            title: 'Monitoreo de punta a punta de procesos',
            subtitle:
              '',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <VerifiedUserIcon />
              </svg>
            ),
            color: colors.deepPurple,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Box width={1} height={'100%'} data-aos={'fade-up'}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  variant="rounded"
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={item.color[themeMode === 'light' ? 50 : 100]}
                  color={item.color[themeMode === 'light' ? 500 : 700]}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Services1.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Services1;
