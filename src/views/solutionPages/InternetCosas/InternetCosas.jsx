import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import {
  Services1,
  Services2,
  Services3,
  Services4,
  Services5,
  Services6,
  Services7
} from './components';

const Respaldos = ({ themeMode = 'light' }) => {
  return (
    <Box>
      <Container>
        <Box>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            align={'center'}
            color={'textSecondary'}
          >
            Internet de las cosas
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Recopila y comparte datos entre sí sin necesidad de <br />
            intervención humana
          </Typography>
          <Box marginTop={6}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              ¿Qué es el
              <Typography color="primary" variant="inherit" component="span">
                {' '}
                internet de las cosas?
              </Typography>
            </Typography>
            <Typography>
              La idea detrás del IoT es permitir que estos dispositivos se
              comuniquen entre sí y con sistemas en la nube, lo que les permite
              recopilar datos, tomar decisiones autónomas y realizar acciones
              específicas de manera automatizada. Por ejemplo, un termostato
              inteligente puede recopilar datos sobre la temperatura interior de
              una casa y ajustar automáticamente la calefacción o el aire
              acondicionado para mantenerla a una temperatura óptima. O un
              sensor de nivel en un contenedor de líquido puede enviar alertas
              cuando el nivel de líquido está demasiado bajo.
            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services1 themeMode={themeMode} />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services5 themeMode={themeMode} />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services6 themeMode={themeMode} />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services7 themeMode={themeMode} />
          </Box>
          

          <Box marginTop={4}>
            <Typography gutterBottom>
              Si falta algo en la documentación, o si encuentra alguna parte
              confusa, póngase en contacto con nosotros con sus sugerencias de
              mejora. Nos encantaría conocer su opinión.{' '}
              <Link
                component={'a'}
                href="mailto:contacto@sycod.com"
                color={'primary'}
              >
                contacto@sycod.com
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

Respaldos.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Respaldos;
