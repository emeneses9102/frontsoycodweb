import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import { Services1, Services2, Services4 } from './components';

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
            Ciberseguridad
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Protege información, privacidad, economía <br />y a tu organización en
            la era digital
          </Typography>
          <Box marginTop={6}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              ¿Qué es la
              <Typography color="primary" variant="inherit" component="span">
                {' '}
                ciberseguridad?
              </Typography>
            </Typography>
            <Typography>
              La ciberseguridad, también conocida como seguridad informática o
              seguridad de la información, es un campo de estudio y un conjunto
              de prácticas diseñadas para proteger sistemas informáticos, redes,
              dispositivos y datos contra amenazas, ataques y acceso no
              autorizado.
              <br />
              Su objetivo principal es garantizar la confidencialidad,
              integridad y disponibilidad de la información y los recursos
              digitales en un entorno cada vez más conectado y dependiente de la
              tecnología.
            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services1 themeMode={themeMode} />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services2 themeMode={themeMode} />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services4 />
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
