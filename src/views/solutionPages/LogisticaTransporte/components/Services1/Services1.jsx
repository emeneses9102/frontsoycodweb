import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LanIcon from '@mui/icons-material/Lan';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import ExpandIcon from '@mui/icons-material/Expand';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

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

            Soluciones de

          </Typography>{' '}
          Movilidad
          <Typography component={'p'} marginTop={2}>

          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Telemetría para el transporte',
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
                <LanIcon />
              </svg>
            ),
            color: colors.amber,
          },
          {
            title: 'Sensores para el control de combustible',
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
                <SsidChartIcon />
              </svg>
            ),
            color: colors.purple,
          },
          {
            title: 'Sensores para el control de velocidad y temperatura en vehículos',
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
                <ExpandIcon />
              </svg>
            ),
            color: colors.blue,
          },
          {
            title: 'Rastreo y recuperación de vehículos',
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
                <WorkspacePremiumIcon />
              </svg>
            ),
            color: colors.green,
          },
          {
            title: 'Cámaras a bordo',
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
                <WorkspacePremiumIcon />
              </svg>
            ),
            color: colors.green,
          },
          {
            title: 'Rastreo y recuperación de vehículos',
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
                <WorkspacePremiumIcon />
              </svg>
            ),
            color: colors.green,
          },
          {
            title: 'Content Management ',
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
                <WorkspacePremiumIcon />
              </svg>
            ),
            color: colors.green,
          },
          {
            title: 'Conectividad a bordo',
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
                <WorkspacePremiumIcon />
              </svg>
            ),
            color: colors.green,
          },
          {
            title: 'Punto de Venta a Bordo',
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
                <WorkspacePremiumIcon />
              </svg>
            ),
            color: colors.green,
          },
          {
            title: 'Sistema de contador de pasajeros',
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
                <WorkspacePremiumIcon />
              </svg>
            ),
            color: colors.green,
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
