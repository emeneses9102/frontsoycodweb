import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import { Services, Cableado } from './components';

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
            REDES ALÁMBRICAS
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Redes almámbricas inteligentes y personalizadas <br /> para tu
            negocio
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
              {' '} redes alámbricas?
              </Typography>
            </Typography>
            <Typography>
              Sin importar el tamaño o giro de la empresa, le ofrecemos lo que
              usted necesita para tener una red inteligente y personalizada de
              acuerdo con las necesidades de su negocio.
              <br />
              Las redes empresariales actuales deben tener la capacidad de
              escalar para manejar nuevas cargas de tráfico, además, tener
              capacidades de automatización e inteligencia para ayudar a la TI a
              manejar, gestionar y proteger la red de manera más eficiente.
            </Typography>
          </Box>
          <Box marginTop={4}>
          <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
               ¿Se sigue utilizando
              <Typography color="primary" variant="inherit" component="span">
              {' '} cableado en la actualidad?
              </Typography>
            </Typography>
            <Typography>
              Los switches siguen siendo la base de las redes cableadas
              modernas, pero su papel ya no se limita simplemente a ofrecer
              conectividad por cable de alto rendimiento. Ahora, los switches
              deben ofrecer además las condiciones para desplegar wifi de alto
              rendimiento y garantizar una disponibilidad de la red
              ininterrumpido 24x7.
            </Typography>
            <Typography marginTop={1}>
              Los switches de nueva generación se han creado a la medida del
              mundo digital actual, para satisfacer las demandas de los casos de
              uso más exigentes, desde la capa de acceso, el núcleo y hasta el
              centro de datos.
            </Typography>
            <Typography marginTop={1}>
              Nuestra cartera de productos ofrece a su área de TI la posibilidad
              de gestionar bajo una única plataforma basada en la nube que
              incluye herramientas de gestión intuitivas y análisis distribuidos
              que transforman la experiencia del usuario.
            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services />
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Cableado />
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
