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
            ¿Qué es el almacenamiento SAN
          </Typography>{' '}
          (Storage Area Network)?
          <Typography component={'p'} marginTop={2}>
          SAN (Red de Área de Almacenamiento) en español, es una arquitectura de almacenamiento que se utiliza para conectar dispositivos de almacenamiento, como matrices de discos o unidades de almacenamiento, a servidores y otros dispositivos de manera que puedan compartir y acceder a los datos de forma eficiente. El principal objetivo de una SAN es proporcionar un entorno de almacenamiento de alto rendimiento, alta disponibilidad y baja latencia para aplicaciones empresariales críticas.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Arquitectura',
            subtitle:
              'SAN es una red dedicada de almacenamiento que utiliza conexiones de alta velocidad, como Fibre Channel o iSCSI, para conectar servidores a matrices de almacenamiento.',
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
            title: 'Uso',
            subtitle:
              'El SAN se utiliza principalmente para aplicaciones que requieren un rendimiento extremadamente alto y baja latencia, como bases de datos empresariales.',
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
            title: 'Escalabilidad',
            subtitle:
              'Los SAN pueden ser altamente escalables y pueden crecer para satisfacer las necesidades cambiantes de almacenamiento mediante la adición de más almacenamiento y servidores.',
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
            title: 'Características clave',
            subtitle:
              'Rendimiento rápido, baja latencia, alta disponibilidad y capacidad de crecimiento escalable.',
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
