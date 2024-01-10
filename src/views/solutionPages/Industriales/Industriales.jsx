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
            REDES INDUSTRIALES
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Redes industriales comunicación eficiente <br /> y confiable
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
                redes industriales?
              </Typography>
            </Typography>
            <Typography>
              Son sistemas de comunicación diseñados específicamente para su uso
              en entornos industriales y de fabricación. Estas redes desempeñan
              un papel fundamental en la automatización y el control de procesos
              industriales, permitiendo que los dispositivos y sistemas
              conectados se comuniquen entre sí de manera eficiente y confiable.
            </Typography>
          </Box>
          <Box marginTop={4}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              ¿Cúal es la diferencia entre las redes industriales e
              <Typography color="primary" variant="inherit" component="span">
                {' '}
                inalámbricas?
              </Typography>
            </Typography>
            <Typography>
              Redes Industriales: Estas redes se utilizan en entornos
              industriales y de fabricación para automatizar y controlar
              procesos, supervisar equipos, recopilar datos de sensores y
              garantizar la eficiencia y la seguridad en la producción. Son
              esenciales en aplicaciones como la automatización de fábricas, la
              gestión de líneas de montaje y el control de maquinaria pesada.
            </Typography>
            <Typography marginTop={1}>
              Redes Alámbricas: Este término generalmente se refiere a cualquier
              red que utiliza conexiones físicas mediante cables para transmitir
              datos. Esto puede incluir redes de área local (LAN), redes de área
              amplia (WAN) y redes de campus que se utilizan en entornos de
              oficina, hogares y otros lugares donde la movilidad no es una
              prioridad.
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
