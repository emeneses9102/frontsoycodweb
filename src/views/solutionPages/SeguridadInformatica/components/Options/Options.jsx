import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import cableado from '../../../../../svg/illustrations/ciberseguridad.jpg';

const Options = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}></Box>
      <Grid container spacing={4}>
        {[
          {
            media: cableado,
            title: 'Ciberseguridad',
            href: '/portafolio/soluciones/seguridad-informatica/ciberseguridad',
            subtitle:
              'En un mundo cada vez más digital, las organizaciones almacenan y manejan una gran cantidad de datos confidenciales, que incluyen información personal, financiera y empresarial.',
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
