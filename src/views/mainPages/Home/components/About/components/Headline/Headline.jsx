import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Headline = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          left: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${theme.palette.primary.dark} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Box marginBottom={2}>
          <Typography
            component="h2"
            variant="h2"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Nuestra trayectoria
            <br />
            haciendo posibles sus proyectos
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography variant="h6" align={'center'} color={'textSecondary'}>
            Proveer servicios de tecnologías de información con la más alta
            calidad, constante innovación para anticiparnos a las necesidades de
            nuestros clientes; integrando en una sola operación la selección
            adecuada de los productos con servicios de vanguardia que ofrecen
            las empresas líderes en nuestro ramo.
          </Typography>
        </Box>
        <Box display="flex" justifyContent={'center'}></Box>
      </Box>
    </Box>
  );
};

export default Headline;
