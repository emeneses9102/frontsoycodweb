import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import { Services, Dispositivos, SDWAN } from './components';
import { Suppliers, Contact } from '../components';

const Celulares = ({ themeMode = 'light' }) => {
  const theme = useTheme();
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
            REDES CELULARES 4G, LTE/5G
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Conexión inalámbrica entre dispositivos móviles, <br /> teléfonos
            inteligentes y tabletas
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
                redes celulares (4G, LTE/5G)?
              </Typography>
            </Typography>
            <Typography>
              Las redes celulares son sistemas de comunicación inalámbrica que
              permiten la transmisión de voz, datos y mensajes entre
              dispositivos móviles utilizando tecnologías de radiofrecuencia.
              Estas redes están diseñadas para proporcionar cobertura y
              conectividad en áreas geográficas extensas, permitiendo que los
              dispositivos móviles, como teléfonos inteligentes, tablets y
              computadoras portátiles, se comuniquen entre sí y con otros
              servicios en línea.
            </Typography>
          </Box>
          <Box marginTop={4}>
            <Typography>
              En SYCOD contamos con soluciones compatibles con tecnología 4G,
              4.5G (LTE) y 5G con los cuales podemos brindar conectividad a
              lugares donde soluciones tradicionales (enlaces cableados o
              Microondas) a menudo no son suficientes o no están disponibles.
              Con la tecnología LTE y 5G podemos ofrecer conexión a internet a
              todo tipo de dispositivos, lo que nos permite ampliar el alcance y
              escalabilidad del negocio.
            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Dispositivos />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <SDWAN />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services />
          </Box>
          {/* <Box marginBottom={2} marginTop={2}>
            <Suppliers />
          </Box>
          <Box
            marginBottom={2}
            marginTop={5}
          >
            <Contact />
          </Box> */}
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

Celulares.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Celulares;
