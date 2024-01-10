import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import { Services1, Services2, Services3, Services4,Services5 } from './components';

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
            Almacenamiento SAN y NAS
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Tecnología de almacenamiento para gestionar <br />y compartir datos
            de manera eficiente
          </Typography>
          <Box marginTop={6}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              ¿Qué es la tecnología de almacenamiento
              <Typography color="primary" variant="inherit" component="span">
                {' '}
                SAN y NAS?
              </Typography>
            </Typography>
            <Typography>
              SAN y NAS son dos tecnologías de almacenamiento en red con
              diferentes enfoques y casos de uso. La elección entre ellas
              dependerá de las necesidades específicas de rendimiento,
              escalabilidad y funcionalidad de una organización. En muchos
              entornos empresariales, se utilizan soluciones híbridas que
              combinan SAN y NAS para aprovechar las fortalezas de ambas
              tecnologías.

            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services1 themeMode={themeMode} />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services5 themeMode={themeMode} />
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
