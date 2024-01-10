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
          <Box marginBottom={1}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              Obten el máximo rendimiento de tus inversiones implementando{' '}
              <Typography color="primary" variant="inherit" component="span">
                SD-WAN
              </Typography>
            </Typography>
            <Typography component={'p'}>
              La tecnología WAN definida por software (SD-WAN) es la respuesta a
              las crecientes demandas de ancho de banda y las consideraciones
              presupuestarias más estrictas.Las nuevas soluciones ofrecen operaciones WAN simplificadas y
              costos operativos reducidos para quienes administran conexiones
              WAN públicas y privadas, y para quienes se desplazan hacia los
              servicios basados en la nube por completo.
              <br/>
              Un SD-WAN moderno permite a las empresas obtener el máximo
              rendimiento de sus inversiones en la nube ofreciendo mejores
              condiciones económicas, mayor control y fiabilidad y un
              rendimiento optimizado.
              Utilice SD-WAN y la tecnología celular para optimizar los flujos
              de tráfico para ir más allá de las características centradas en el
              cableado y adaptarse a la a los nuevos retos de tecnologías en
              vehículos, tiendas, oficinas e IoT.
              <br/>
              Agregue a su red la capacidad de Crear políticas por tipo de
              tráfico a través de los enlaces WAN disponibles, políticas de
              seguridad Basado en el rendimiento de la conexión, Política de
              reconocimiento de aplicaciones para optimizar la calidad de
              experiencia.
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
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Dispositivos;
