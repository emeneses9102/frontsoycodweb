import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import TableRowsIcon from '@mui/icons-material/TableRows';
import StreamIcon from '@mui/icons-material/Stream';
import MemoryIcon from '@mui/icons-material/Memory';

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
            ¿Cómo sé si soy candidato de utilizar
          </Typography>{' '}
          virtualización?
          <Typography component={'p'} marginTop={2}>
            La decisión de implementar la virtualización en un entorno de TI
            depende de diversos factores y consideraciones. No existe un momento
            único o universal para implementar la virtualización, ya que varía
            según las necesidades y objetivos de cada organización.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Escalabilidad lenta',
            subtitle:
              'Estas bases de datos almacenan y gestionan datos en la memoria principal (RAM) en lugar de en discos, lo que las hace extremadamente rápidas para lecturas y consultas.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <MemoryIcon />
              </svg>
            ),
            color: colors.amber,
          },
          {
            title: 'Migraciones deficientes',
            subtitle:
              'Estas bases de datos utilizan un modelo de datos relacional, donde la información se almacena en tablas con filas y columnas.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <TableRowsIcon />
              </svg>
            ),
            color: colors.purple,
          },
          {
            title: 'Altos costos',
            subtitle:
              'Estas bases de datos se utilizan cuando se necesita una flexibilidad en el esquema de datos o cuando se manejan grandes volúmenes de datos no estructurados o semi-estructurados.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <StreamIcon />
              </svg>
            ),
            color: colors.cyan,
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
