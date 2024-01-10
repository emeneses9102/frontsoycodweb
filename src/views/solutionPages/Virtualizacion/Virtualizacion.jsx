import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import { Services1, Services3, Services4 } from './components';

const Virtualizacion = ({ themeMode = 'light' }) => {
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
            virtualización
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Crea una versión virtual o simulada <br />
            de un recurso informático
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
                virtualización?
              </Typography>
            </Typography>
            <Typography>
              La virtualización es una tecnología que permite crear una versión
              virtual o simulada de un recurso informático, como un servidor,
              una red, un sistema operativo o incluso una aplicación. Esta
              tecnología se utiliza para mejorar la eficiencia, la flexibilidad
              y la administración de los recursos informáticos, así como para
              consolidar múltiples recursos en un solo hardware físico.
              <br />
            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services1 themeMode={themeMode} />
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

Virtualizacion.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Virtualizacion;
