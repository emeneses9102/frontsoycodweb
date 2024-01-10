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
  Services6,
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
            IDENTIFICACION POR RADIO FRECUENCIA
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Etiquetas RFID, lectores y un software que  <br />
            gestiona la información
          </Typography>
          <Box marginTop={6}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              ¿Qué es el
              <Typography color="primary" variant="inherit" component="span">
                {' '}
                Identificación por Radio Frecuencia (RFID) ?
              </Typography>
            </Typography>
            <Typography>

              La Identificación por Radio Frecuencia (RFID) es una tecnología que permite la identificación remota de objetos, personas o animales mediante el uso de etiquetas o tags equipados con chips electrónicos que contienen información y antenas para la comunicación a través de ondas de radio.

              El sistema RFID consiste en etiquetas RFID, lectores y un software que gestiona la información recopilada. Las etiquetas RFID pueden ser de dos tipos principales:


            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services1 themeMode={themeMode} />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services5 themeMode={themeMode} />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services6 themeMode={themeMode} />
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
