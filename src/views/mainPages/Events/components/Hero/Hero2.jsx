import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const Hero = () => {
  const theme = useTheme();
  const [isEvent, setIsEvent] = useState(false);

  const onSendToBot = (event) => {
    window.scrollTo(0, 4000);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      {isEvent ? (
        <Grid container spacing={4}>
          <Grid item container alignItems={'center'} xs={12} md={6}>
            <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
              <Box marginBottom={2}>
                <Typography
                  component="h1"
                  variant="h4"
                  color="white"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  ¿Conoces los alcances de la Conectividad Móvil y su
                  importancia dentro de la Transformación Digital?{' '}
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography
                  variant="h6"
                  component="p"
                  color="textSecondary"
                  sx={{ fontWeight: 400 }}
                >
                  En SYCOD hemos preparado un evento totalmente gratuito donde
                  abordaremos varios temas sobre la conectividad móvil, los
                  tabús, tendencias, casos de uso y una demo en vivo para que
                  puedas resolver todas tus dudas.
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="textSecondary"
                  sx={{ fontWeight: 400 }}
                >
                  Si eres una empresa del sector de Transporte y Logística o
                  cuentas con flotilla vehicular, esto te ayudará a dar un paso
                  al próximo nivel!!!!!!!!
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <Box
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 0 }}
                  width={{ xs: '100%', md: 'auto' }}
                >
                  <Button
                    component={'a'}
                    startIcon={<HistoryEduIcon />}
                    href={'https://lnkd.in/gRg3HfJV'}
                    variant="contained"
                    color="success"
                    target="_blank"
                    size="large"
                    fullWidth={isMd ? false : true}
                  >
                    Regístrate aquí
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'center'}
            xs={12}
            md={6}
            data-aos={isMd ? 'fade-left' : 'fade-up'}
          >
            <Box
              component={'img'}
              height={'100%'}
              width={'100%'}
              src={
                'https://assets.maccarianagency.com/screenshots/dashboard.png'
              }
              alt="..."
              loading="lazy"
              boxShadow={3}
              borderRadius={4}
              maxWidth={600}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={4}>
          <Grid item container alignItems={'center'} xs={12} md={12}>
            <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
              <Box marginBottom={2}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="white"
                  sx={{
                    fontWeight: 700,
                    alignContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  ¿Qué te gustaría conocer en el próximo evento?
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography
                  variant="h6"
                  component="p"
                  color="white"
                  sx={{ fontWeight: 400 }}
                >
                  Al compartirnos tus temas de interés fortalecemos la
                  experiencia de los participantes.
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <Box
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 0 }}
                  width={{ xs: '100%', md: 'auto' }}
                >
                  <Button
                    startIcon={<HistoryEduIcon />}
                    variant="contained"
                    color="success"
                    target="_self"
                    size="large"
                    type="submit"
                    onClick={onSendToBot}
                    fullWidth={isMd ? false : true}
                  >
                    Comparte tu opinión
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
export default Hero;
