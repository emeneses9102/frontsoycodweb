import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import img1 from '../../../../../svg/illustrations/internet-de-las-cosas.jpg';
import img2 from '../../../../../svg/illustrations/automatizacion-de-procesos.jpg';
import img3 from '../../../../../svg/illustrations/centros-de-distribucion.jpg';
import img4 from '../../../../../svg/illustrations/logistica-transporte.png';

const Options = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}></Box>
      <Grid container spacing={4}>
        {[
          {
            media: img1,
            title: 'Internet de las Cosas',
            href: '/portafolio/soluciones/aplicaciones-de-movilidad-iot/internet-de-las-cosas',
            subtitle:
              'Red de dispositivos físicos que están conectados a través de Internet que pueden recopilar y compartir datos entre sí sin necesidad de intervención humana.',
          },
          {
            media: img2,
            title: 'Automatización de Procesos',
            href: '/portafolio/soluciones/aplicaciones-de-movilidad-iot/automatizcion-de-procesos',
            subtitle:
              'Aumenta la eficiencia, la consistencia y la precisión de las operaciones, así como reduce los costos y los errores humanos.',
          },
          {
            media: img3,
            title: ' Identificación por Radio Frecuencia (RFID)',
            href: '/portafolio/soluciones/aplicaciones-de-movilidad-iot/identificacion-por-radiofrecuencia',
            subtitle:
              'El sistema RFID consta de etiquetas RFID (también conocidas como tags o etiquetas inteligentes), lectores y un software para gestionar la información.',
          },
          {
            media: img4,
            title: 'IoT para Logística y Transporte',
            href: 'aplicaciones-de-movilidad-iot/identificacion-por-radiofrecuencia',
            subtitle:
              'La logística y el transporte son dos componentes fundamentales en la gestión de la cadena de suministro y desempeñan un papel crítico en la entrega eficiente de productos y servicios a los clientes.',
          },
        ].map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={item.title}
            data-aos={'fade-up'}
          >
            <Box
              component={NavLink}
              to={item.href}
              display={'block'}
              width={'100%'}
              height={'100%'}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                borderRadius={3}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 240,
                  }}
                />
                <Box component={CardContent}>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'left'}
                  >
                    {item.title}
                  </Box>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Options;
