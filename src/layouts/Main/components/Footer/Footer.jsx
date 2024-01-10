import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box
          display={'flex'}
          component="a"
          underline="none"
          href="/"
          title="SYCOD"
          height={24}
          width={35}
        >
          <img
            to="/"
            sx={{ mt: 1 }}
            component={NavLink}
            height={'150%'}
            width={'100%'}
            src="https://d117ffkp1c6hyc.cloudfront.net/images/logo-sycod-header.png"
          />
        </Box>
        <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="https://people.zoho.com/sycodpeople/zp#home/dashboard"
              color="textPrimary"
              variant={'subtitle2'}
            >
              Zoho
            </Link>
          </Box>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="/aviso-de-privacidad"
              color="textPrimary"
              variant={'subtitle2'}
            >
              Aviso de Privacidad
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="textSecondary"
        gutterBottom
      >
        &copy; Copyright 2023 SYCOD - Sistemas y Computadores Digitales, S.A. de
        C.V | Todos los derechos reservados
      </Typography>
      <Typography
        align={'center'}
        variant={'caption'}
        color="textSecondary"
        component={'p'}
      >
        Cuando visita o interactúa con nuestros sitios, servicios o
        herramientas, nosotros o nuestros proveedores de servicios autorizados
        podemos utilizar cookies para almacenar información que nos ayude a
        ofrecerle una experiencia mejor, más rápida y más segura, así como con
        fines de marketing.
      </Typography>
    </Grid>
  </Grid>
);

export default Footer;
