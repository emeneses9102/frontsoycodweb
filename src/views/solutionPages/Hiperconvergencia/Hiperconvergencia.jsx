import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import { Services2, Services1 } from './components';

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
            hiperconvergencia
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Combina recursos, almacenamiento, redes <br />y virtualización en
            una sola plataforma
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
                hiperconvergencia?
              </Typography>
            </Typography>
            <Typography>
              La hiperconvergencia es un enfoque en la infraestructura de
              tecnología de la información (TI) que combina recursos de cómputo,
              almacenamiento, redes y virtualización en una sola plataforma
              integrada y escalable.
              <br />
              En lugar de mantener estos recursos como sistemas independientes,
              la hiperconvergencia los unifica en una sola solución,
              generalmente gestionada a través de un único software.
              <br />
              Esto puede ser beneficioso para organizaciones que buscan
              modernizar su infraestructura de TI y reducir la complejidad
              operativa.
            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services1 themeMode={themeMode} />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services2 />
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
