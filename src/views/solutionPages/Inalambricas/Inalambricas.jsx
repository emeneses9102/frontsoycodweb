import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import { Services, Cableado,SiteSurvey } from './components';

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
            REDES INALÁMBRICAS
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Redes inalmámbricas flexibilidad  <br /> de ubicación y movilidad
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
                redes inalámbricas?
              </Typography>
            </Typography>
            <Typography>
              Las redes inalámbricas, también conocidas como redes WiFi o redes
              inalámbricas de área local (WLAN), son sistemas de comunicación
              que permiten la transmisión de datos y la conexión a Internet sin
              necesidad de cables físicos.
              <br />
              Estas redes utilizan tecnologías de radiofrecuencia para
              transmitir datos entre dispositivos, como computadoras, teléfonos
              móviles, tabletas, impresoras y otros dispositivos electrónicos,
              de manera que puedan comunicarse entre sí y acceder a recursos
              compartidos, como impresoras o la conexión a Internet, sin
              necesidad de estar conectados mediante cables.
            </Typography>
          </Box>
          <Box marginTop={4}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              Las empresas necesitan una infraestructura de
              <Typography color="primary" variant="inherit" component="span">
                {' '}
                red inalámbrica de calidad
              </Typography>
            </Typography>
            <Typography>
              La necesidad de conectar dispositivos a recursos y/o servicios
              digitales propios de la empresa o internet no cesan de aumentar y
              las empresas que ofrecen conexiones Wi-Fi a sus clientes demandan
              infraestructuras cada vez más potentes.
            </Typography>
            <Typography marginTop={1}>
              Es en este sentido que SYCOD ofrece una cartera de soluciones para
              redes WIFI acompañado de las marcas líderes en tecnología para
              redes WLAN y las mejores prácticas para la implementación de
              dichas tecnologías.
            </Typography>
           
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Cableado />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <SiteSurvey />
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
