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
            Nube
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Accede a una variedad de servicios y <br />
            recursos informáticos a través de internet
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
                nube?
              </Typography>
            </Typography>
            <Typography>
              La nube se refiere a la entrega de servicios informáticos a través
              de internet, lo que permite el acceso a recursos informáticos,
              como servidores, almacenamiento, bases de datos, aplicaciones y
              más, de forma remota y a través de una red de servidores
              distribuidos en centros de datos en todo el mundo.
              <br />
              En lugar de poseer y gestionar servidores y recursos informáticos
              físicos de forma local, las empresas y los usuarios pueden
              aprovechar la nube para acceder a estos recursos bajo demanda. Los
              servicios en la nube se ofrecen a través de diferentes modelos:
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
