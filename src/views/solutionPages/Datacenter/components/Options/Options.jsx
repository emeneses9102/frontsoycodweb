import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import cableado from '../../../../../svg/illustrations/istockphoto-1448152453-1024x1024.jpg';

const Options = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}></Box>
      <Grid container spacing={4}>
        {[
          {
            media:
              'https://d117ffkp1c6hyc.cloudfront.net/images/hiperconvergencia.jpg',
            title: 'Hiperconvergencia',
            href: '/portafolio/soluciones/datacenter/hiperconvergencia',
            subtitle:
              'Infraestructura convergente que integra todos estos componentes en un solo sistema altamente automatizado y escalable.',
          },
          {
            media:'https://d117ffkp1c6hyc.cloudfront.net/images/base-de-datos.jpg',
            title: 'Base de datos',
            href: '/portafolio/soluciones/redes/redes-celulares',
            subtitle:
              'Facilita el acceso y la manipulación de datos de manera eficiente y segura en milisegundos.',
          },
          {
            media:'https://d117ffkp1c6hyc.cloudfront.net/images/virtualizacion.jpg',
            title: 'Virtualización',
            href: '/portafolio/soluciones/redes/redes-inalambricas',
            subtitle:
              'Crea entornos virtuales o simulados dentro de un sistema de hardware o software, te permitirá ejecutar múltiples sistemas operativos o aplicaciones en servidores físicos o virtuales.',
          },
          {
            media: 'https://d117ffkp1c6hyc.cloudfront.net/images/respaldos.jpg',
            title: 'Respaldos',
            href: '/portafolio/soluciones/redes/redes-iot',
            subtitle:
              'Protege tu información contra pérdidas, daños, errores humanos, ataques cibernéticos, fallos de hardware o cualquier otro evento que pueda comprometer la integridad de los datos.',
          },
          {
            media: 'https://d117ffkp1c6hyc.cloudfront.net/images/nube.jpg',
            title: 'Nube',
            href: '/portafolio/soluciones/redes/sd-wan',
            subtitle:
              'Infraestructura que permitirá acceder y utilizar recursos de cómputo, almacenamiento, redes y servicios a través de Internet, bajo demanda y según sea necesario.',
          },
          {
            media: 'https://d117ffkp1c6hyc.cloudfront.net/images/almacenamiento.jpg',
            title: 'Almacenamiento',
            href: '/portafolio/soluciones/redes/sd-wan',
            subtitle:
              'Tenemos la capacidad de preservar datos, información o elementos físicos de manera que puedan ser accedidos y recuperados en un momento posterior.',
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
