import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';

const Options = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}></Box>
      <Grid container spacing={4}>
        {[
          {
            media:
              'https://d117ffkp1c6hyc.cloudfront.net/images/redes-alambricas.jpg',
            title: 'Redes Alámbricas',
            href: '/portafolio/soluciones/redes/redes-alambricas',
            subtitle:
              'Las redes alámbricas siguen siendo esenciales en muchas situaciones donde se requiere alta velocidad, seguridad y confiabilidad',
          },
          {
            media:
              'https://d117ffkp1c6hyc.cloudfront.net/images/redes-celulares.jpg',
            title: 'Redes Celulares',
            href: '/portafolio/soluciones/redes/redes-celulares',
            subtitle:
              'Comunicación moderna, permitiendo la comunicación en movimiento y una variedad de aplicaciones y servicios.',
          },
          {
            media:
              'https://d117ffkp1c6hyc.cloudfront.net/images/redes-inalambricas.jpg',
            title: 'Redes Inalámbricas',
            href: '/portafolio/soluciones/redes/redes-inalambricas',
            subtitle:
              'Conectividad moderna al ofrecer flexibilidad y movilidad en una variedad de aplicaciones.',
          },
          {
            media:
              'https://d117ffkp1c6hyc.cloudfront.net/images/redes-industriales.jpg',
            title: 'Redes Industriales',
            href: '/portafolio/soluciones/redes/redes-industriales',
            subtitle:
              'Fiabilidad, tiempo real y determinismo, y son esenciales para habilitar la automatización y el control preciso de los procesos industriales',
          },
          {
            media: 'https://d117ffkp1c6hyc.cloudfront.net/images/redes-iot.jpg',
            title: 'Redes IoT',
            href: '/portafolio/soluciones/redes/redes-iot',
            subtitle:
              'Ofrece un potencial significativo para mejorar la eficiencia, comodidad y la calidad de vida en una amplia variedad de aplicaciones y sectores.',
          },
          {
            media: 'https://d117ffkp1c6hyc.cloudfront.net/images/sd-wan.jpg',
            title: 'SD WAN',
            href: '/portafolio/soluciones/redes/sd-wan',
            subtitle:
              'Aprovecha múltiples tipos de conexiones y optimizar el tráfico para cumplir con los requisitos de rendimiento y calidad de las aplicaciones empresariales.',
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
