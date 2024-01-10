import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import { Services1, Services2, Services3, Services4 } from './components';

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
            respaldos
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Genera una copia de seguridad de tu información <br />
            en sistemas informáticos
          </Typography>
          <Box marginTop={6}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              ¿Qué son los
              <Typography color="primary" variant="inherit" component="span">
                {' '}
                respaldos?
              </Typography>
            </Typography>
            <Typography>
              Los respaldos se refieren a copias de seguridad o copias de los
              datos y la información almacenados en sistemas informáticos,
              dispositivos electrónicos o servidores. Estas copias de seguridad
              se crean con el propósito de preservar la integridad y
              disponibilidad de los datos en caso de pérdida, corrupción,
              accidentes, fallos de hardware o software, o desastres naturales.
              <br />
              Los respaldos son esenciales para garantizar la continuidad del
              negocio y la recuperación de datos en situaciones adversas. Los
              datos respaldados pueden incluir documentos, archivos, bases de
              datos, configuraciones de sistemas operativos, correos
              electrónicos y cualquier otra información crítica.
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
          <Box marginBottom={1} marginTop={1}>
            <Services3 />
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
