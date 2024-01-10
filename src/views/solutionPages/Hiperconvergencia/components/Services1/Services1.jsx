import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import UpdateDisabledIcon from '@mui/icons-material/UpdateDisabled';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';

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
            ¿Soy candidato de requerir el uso de la
          </Typography>{' '}
          hiperconvergencia?
          <Typography component={'p'} marginTop={2}>
              La decisión de implementar la hiperconvergencia en un entorno de
              centro de datos depende de varios factores y consideraciones
              específicas de cada organización. Aquí tienes algunas situaciones
              y consideraciones que podrían indicar que es el momento adecuado
              para considerar la implementación de la hiperconvergencia:
            </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Complejidad',
            subtitle:
              'Si tu centro de datos utiliza sistemas independientes para servidores, almacenamiento y redes, y estás buscando consolidar y simplificar la infraestructura.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <PsychologyAltIcon/>
              </svg>
            ),
            color: colors.teal,
          },
          {
            title: 'Infraestructura obsoleta',
            subtitle:
              'Si tus sistemas actuales están llegando al final de su vida útil o requieren actualizaciones costosas.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <UpdateDisabledIcon/>
              </svg>
            ),
            color: colors.pink,
          },
          {
            title: 'Gestión dividida',
            subtitle:
              'Si estás buscando una manera de simplificar la gestión de recursos de TI y reducir la carga de trabajo del personal de TI.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <SafetyDividerIcon/>
              </svg>
            ),
            color: colors.amber,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
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
