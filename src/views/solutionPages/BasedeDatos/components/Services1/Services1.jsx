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
            ¿En cuáles base de datos estámos especializados
          </Typography>{' '}
          y de qué tipo?
          <Typography component={'p'} marginTop={2}>
            Las bases de datos relacionales, las bases de datos NoSQL, las bases
            de datos en memoria y muchas otras, cada una con sus propias
            características y casos de uso específicos. Las bases de datos son
            fundamentales en una amplia variedad de aplicaciones, desde sistemas
            de gestión de inventario y recursos humanos hasta redes sociales y
            motores de búsqueda en la web.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Bases de Datos Relacionales',
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
            color: colors.teal,
          },
          {
            title: 'Bases de Datos NoSQL',
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
            color: colors.pink,
          },
          {
            title: 'Bases de Datos en Memoria',
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
