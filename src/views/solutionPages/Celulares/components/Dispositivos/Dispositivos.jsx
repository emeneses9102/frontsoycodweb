import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Dispositivos = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid
        container
        spacing={4}
        marginTop={1}
        direction={isMd ? 'row' : 'row'}
      >
        <Grid item xs={12} md={12} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={0}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              Localización de dispositivos{' '}
              <Typography color="primary" variant="inherit" component="span">
                en tiempo real
              </Typography>
            </Typography>
            <Typography component={'p'}>
              Las soluciones basadas en la red LTE y 5G tienen la capacidad de
              ubicar los dispositivos en tiempo real en cualquier parte dónde se
              tenga cobertura celular, es decir se puede calcular el
              desplazamiento de los dispositivos y definir en dónde se
              encuentran conectados o dónde fue su última desconexión.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
        >
          
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Dispositivos;
