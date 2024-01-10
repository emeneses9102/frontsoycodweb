import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import { Services1, Services2, Services3, Services4 } from './components';

const BasedeDatos = ({ themeMode = 'light' }) => {
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
            base de datos
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Con una base de datos accede, gestiona <br />y actualiza de manera
            eficiente
          </Typography>
          <Box marginTop={6}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              ¿Qué es una
              <Typography color="primary" variant="inherit" component="span">
                {' '}
                base de datos?
              </Typography>
            </Typography>
            <Typography>
              Las bases de datos son conjuntos estructurados de datos
              organizados de manera que se puedan acceder, gestionar y
              actualizar de manera eficiente. Estas colecciones de datos están
              diseñadas para almacenar, recuperar, administrar y manipular
              información de manera sistemática. Las bases de datos son una
              parte fundamental en la gestión de información en la mayoría de
              las aplicaciones y sistemas informáticos modernos.
              <br />
            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services1 themeMode={themeMode} />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services2 />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services3 />
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

BasedeDatos.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default BasedeDatos;
