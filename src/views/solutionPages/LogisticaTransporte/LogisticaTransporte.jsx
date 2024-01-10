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
            Logística y transporte
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Desde su punto de origen hasta  <br />
            su destino final
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
                logística y transporte?
              </Typography>
            </Typography>
            <Typography>

              Las soluciones tecnológicas en Logística y Transporte se basan en software, sistemas de automatización, control de inventario, gestión y análisis de la cadena logística y de suministros para la planificación, implementación y control del flujo eficiente y almacenamiento, transporte y distribución de bienes servicios e información, entre el punto de origen y de consumo, con el propósito de satisfacer los requerimientos de los usuarios, desde los horizontes de la eficiencia, eficacia, rentabilidad y competitividad del mercado nacional e internacional.

            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services1 themeMode={themeMode} />
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
