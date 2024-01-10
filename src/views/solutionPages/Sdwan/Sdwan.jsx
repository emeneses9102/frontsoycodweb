import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '../../../common/Container';
import { Services } from './components';

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
            SD-WAN
          </Typography>
          <Typography
            component={'h1'}
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Red de área amplia definida por software <br /> (SD-WAN) para tu
            negocio
          </Typography>
          <Box marginTop={6}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              ¿Qué es
              <Typography color="primary" variant="inherit" component="span">
                {' '}
                Software-Defined Wide Area Network?
              </Typography>
            </Typography>
            <Typography>
              Es una tecnología que se utiliza en redes empresariales para
              mejorar la gestión y el rendimiento de las conexiones de área
              amplia (WAN). Tradicionalmente, las redes WAN se han implementado
              utilizando hardware dedicado y configuraciones estáticas, lo que
              puede limitar la flexibilidad y la eficiencia en la gestión de
              tráfico de datos entre ubicaciones geográficamente dispersas.
              <br />
              Transforma la gestión de las redes WAN empresariales al agregar
              flexibilidad, seguridad y eficiencia a la infraestructura de red,
              lo que es especialmente beneficioso para empresas con múltiples
              ubicaciones geográficas o que desean mejorar el rendimiento de sus
              aplicaciones en la nube.
            </Typography>
          </Box>
          <Box marginTop={4}>
            <Typography
              component={'h2'}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              La evolución de las redes WAN
              <Typography color="primary" variant="inherit" component="span">
                {' '}
                ha llegado
              </Typography>
            </Typography>
            <Typography>
              SD-WAN o Software Defined WAN es la evolución de las redes WAN que
              atiende las necesidades actuales esta tecnología transformadora
              simplifica el control y la administración al proporcionar una
              arquitectura de WAN virtual que conecta de manera segura a
              usuarios, sucursales remotas, servicios en la nube y centros de
              datos de las empresas.
            </Typography>
            <Typography marginTop={1}>
              SD-WAN provee una conectividad simplificada de corporativos y
              oficinas remotas, una mayor confiabilidad, un rendimiento
              optimizado de aplicativos y una mayor agilidad de la red. La
              tecnología SD-WAN ayuda a reducir los costos totales y permite un
              mayor uso de los recursos de enlaces hacia internet y proporcionar
              una arquitectura de WAN y de la sucursal más automatizada que es
              necesaria para abordar las necesidades de TI actuales.
            </Typography>
          </Box>
          <Box marginBottom={1} marginTop={1}>
            <Services />
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
