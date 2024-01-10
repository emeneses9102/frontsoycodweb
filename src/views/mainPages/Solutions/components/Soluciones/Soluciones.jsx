import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SkeletonC from '../../../../../svg/components/SkeletonC';
import LazyLoadinComponent from '../../../../../svg/components/LazyLoadingComponent';
import { NavLink } from 'react-router-dom';
import img1 from '../../../../../svg/illustrations/seguridad-informatica.jpg';

const Soluciones = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            media: 'https://d117ffkp1c6hyc.cloudfront.net/images/redes.jpeg',
            title: 'Redes',
            href: '/portafolio-de-soluciones-redes',
            subtitle:
              'Trabaja de manera ininterrumpida y segura desde el hogar u oficina.',
          },
          {
            media:
              'https://d117ffkp1c6hyc.cloudfront.net/images/datacenter.jpeg',
            title: 'Data Center',
            href: '/portafolio-de-soluciones-data-center',
            subtitle:
              'Adquiere tu infraestructura bajo un esquema de pago por consumo.',
          },
          {
            media:
              'https://d117ffkp1c6hyc.cloudfront.net/images/aplicaciones-movilidad.jpeg',
            title: 'Aplicaciones de Movilidad (IoT)',
            href: '/portafolio-de-soluciones-en-aplicaciones-de-movilidad',
            subtitle:
              'Soluciones especializadas en Almacenes, CEDIS y Fullfillments.',
          },
          {
            media: img1,
            title: 'Seguridad Informática',
            href: '/portafolio-de-soluciones-en-seguridad-informatica',
            subtitle:
              'Protege tu información contra cualquier tipo de amenaza.',
          },
        ].map((item, i) => (
          <Grid item xs={6} sm={4} md={4} lg={4} key={i} data-aos={'fade-up'}>
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
                {/* <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 340,
                  }}
                /> */}

                {loading ? (
                  <SkeletonC heightFrom={400} />
                ) : (
                  <CardMedia
                    sx={{
                      height: 310,
                    }}
                  >
                    <LazyLoadinComponent
                      width={'100%'}
                      height={'100%'}
                      src={item.media}
                      title={item.title}
                    />
                  </CardMedia>
                )}
                <Box component={CardContent}>
                  <Box
                    component={Typography}
                    variant={'h6'}
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
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Soluciones;
