import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import SkeletonC from '../../../../../svg/components/SkeletonC';
const JustMap = React.lazy(() => import('../JustMap/JustMap'));
const Map = ({ themeMode = 'light' }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <Box>
        <Box>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
              marginBottom: 1,
            }}
            color={'textSecondary'}
          >
            CONTACTO
          </Typography>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
              }}
            >
              Queremos conocer tu opinión
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color={'textSecondary'}>
              Si te interesa cotizar algún producto o servicio, o simplemente
              conocer más información de alguna solución, déjanos tu mensaje.
            </Typography>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h6" color={'textSecondary'}>
              Nos encantaría poder ayudarte.
            </Typography>
          </Box>
        </Box>
        <Box marginY={4}>
          {loading ? <SkeletonC heightFrom={250} /> : <JustMap />}
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'body1'}
              sx={{ fontWeight: '600', marginBottom: 1 }}
            >
              <LocalPhoneIcon
                variant={'body1'}
                sx={{ fontWeight: '200', fontSize: 15, marginBottom: 0 }}
              />{' '}
              Llámanos:
            </Typography>
            <Typography variant={'subtitle1'}> (55) 56 61 15 16</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'body1'}
              sx={{ fontWeight: '600', marginBottom: 1 }}
            >
              <EmailIcon
                variant={'body1'}
                sx={{ fontWeight: '200', fontSize: 15, marginBottom: 0 }}
              />{' '}
              Escríbenos:
            </Typography>
            <Typography variant={'subtitle1'}>contacto@sycod.com</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={'body1'}
              sx={{ fontWeight: '600', marginBottom: 1 }}
            >
              <BusinessIcon
                variant={'body1'}
                sx={{ fontWeight: '200', fontSize: 15, marginBottom: 0 }}
              />{' '}
              Dirección:
            </Typography>
            <Typography variant={'subtitle1'}>
              Av. Insurgentes Sur 1605 piso 11, Torre Mural, San José
              Insurgentes, Benito Juárez, 03900 Ciudad de México, CDMX
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

Map.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Map;
