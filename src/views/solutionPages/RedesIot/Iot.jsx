import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import { Services, Cableado } from './components';

const Alambricas = ({ themeMode = 'light' }) => {
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
            REDES IOT
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Redes IoT para acciones o desiciones <br /> automáticas
          </Typography>
          <Box marginTop={6}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              ¿Qué son las
              <Typography color="primary" variant="inherit" component="span">
                {' '}
                redes IoT (Internet de las cosas)?
              </Typography>
            </Typography>
            <Typography>
              Son sistemas de dispositivos interconectados que pueden
              comunicarse entre sí y con otros sistemas a través de Internet.
              Estos dispositivos, que pueden ser objetos cotidianos, sensores,
              máquinas, vehículos, electrodomésticos, entre otros, están
              equipados con sensores, software y tecnología de comunicación que
              les permite recopilar y compartir datos.
              <br />
              Las redes IoT tienen como objetivo principal recopilar información
              del entorno, procesarla y utilizarla para tomar decisiones o
              realizar acciones automáticas. Algunos ejemplos de aplicaciones de
              IoT incluyen:
            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Cableado />
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

Alambricas.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Alambricas;
