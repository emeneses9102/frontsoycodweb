import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { CardHeader } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const Stories = ({ themeMode = 'light' }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Casos de Éxito
        </Typography>
        <Typography
          component="h2"
          fontWeight={700}
          variant={'h2'}
          align={'center'}
        >
          Ayudamos a equipos
          <br />y empresas
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            companyLogo:
              'https://d117ffkp1c6hyc.cloudfront.net/images/hpe-logo.png',
            description:
              'Empresa mexicana líder en línea blanca en América y con presencia a nivel el mundial renovó y modernizo su infraestructura dentro de sus data Center obteniendo mejores tiempos de respuestas en sus procesos y transacciones con ayuda de soluciones HPE  Certificadas para SAP HANA.',
            href: '/alianza/hewlett-packard-enterprise',
          },
          {
            companyLogo:
              'https://d117ffkp1c6hyc.cloudfront.net/images/hpe-aruba-networking-logo.png',
            description:
              'Empresa trasnacional de E-commerce asegura su alta disponibilidad de su red en sus centros de distribución  en toda latinoamérica con infraestructura de AP´s Aruba. Durante temporadas altas alcanzan las 40 ventas por segundo.',
            href: '/alianza/aruba-networks',
          },
          {
            companyLogo:
              'https://d117ffkp1c6hyc.cloudfront.net/images/redis-logo.png',
            description:
              'Empresa del sector bancario optimizó el almacenamiento de los datos de sesión de sus usuarios de forma eficiente en memoria, con apoyo de Redis Enterprise y el uso de caché.',
            href: '/alianza/redis-enterprise',
          },
          {
            companyLogo:
              'https://d117ffkp1c6hyc.cloudfront.net/images/honeywell-logo.png',
            description:
              'Empresa del sector retail automatizó su centro de distribución implementando dispositivos portátiles. Obteniendo mayor control operativo, gestión de productos, inventarios efecitos y precisos.',
            href: '/alianza/honeywell',
          },
          {
            companyLogo:
              'https://d117ffkp1c6hyc.cloudfront.net/images/cradlepoint-logo.png',
            description:
              'Comercializadora de pisos y azulejos (ubicada dentro de una tienda mayor) mantiene todos sus puntos de venta en linea a traves de una solución de enlaces failover con red celular a nivel nacional.',
            href: '/alianza/cradlepoint-connect-beyond',
          },
          {
            companyLogo:
              'https://d117ffkp1c6hyc.cloudfront.net/images/fortinet-logo.png',
            description:
              'Empresa de medios de comunicación mantiene su capa de seguridad perimetral con equipos Fortinet, evitando así ataques y amenzas a su infraestructura.',
            href: '/alianza/fortinet',
          },
          {
            companyLogo:
              'https://d117ffkp1c6hyc.cloudfront.net/images/lenovo-logo.png',
            description:
              'Dependencia gubernamental dedicada al estudio de estadísticas con la implementación de una solución de servidores en formato Blade logro la consolidación de sus servidores físicos, así como una mejoría en su administración para con ello obtener un ahorro de tiempo en la asignación de recursos y energía dentro del site.',
            href: '/alianza/lenovo',
          },
          {
            companyLogo:
              'https://d117ffkp1c6hyc.cloudfront.net/images/vmware-logo.png',
            description:
              'Empresa distribuidora encargada de la logística de una cervecera a nivel nacional implemento una solución de virtualización de con Vmware la cual le permitió consolidar su Data Center, así como mejorar la agilidad, la flexibilidad y la escalabilidad de la infraestructura de TI, adicionalmente se logró con la virtualización obtener mayor movilidad de las cargas de trabajo, el aumento del rendimiento y de la disponibilidad de los recursos.',
            href: '/alianza/vmware',
          },
          {
            companyLogo:
              'https://d117ffkp1c6hyc.cloudfront.net/images/veaam-logo.png',
            description:
              'Empresa Radiodifusora implemento una solución de respaldos con Veeam la cual le ayuda a obtener copias de seguridad, gestión de datos y replicación entre sitios con esto lograron estar seguros de que sus aplicaciones y datos están protegidos contra el ransomware además de garantizar la continuidad en sus operaciones.',
            href: '/alianza/veeam-software',
          },
          {
            companyLogo:
              'https://d117ffkp1c6hyc.cloudfront.net/images/hp-logo.png',
            description:
              'Empresa mexicana dedicada a la fabricación de artículos deportivos, reemplazó su base instalada de equipos de cómputo dentro de sus oficinas obteniendo un mejor rendimiento además de que se aceleraron los procesos y manejo de información. Con esto se logró una mejor utilización del tiempo laboral de los empleados, Ahorro de energía y seguridad en sus estaciones de trabajo.',
            href: '/alianza/hewlett-packard',
          },
          {
            companyLogo:
              'https://d117ffkp1c6hyc.cloudfront.net/images/tecnocontrol-fondo-blanco.png',
            description:
              'Soluciones para maximizar la seguridad y productividad de sus vehículos y activos móviles, buscando siempre exceder sus expectativas de calidad y servicio.',
            href: '/alianza/tecnocontrol',
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={item.href}>
            <Box
              component={NavLink}
              to={item.href}
              display={'block'}
              width={'100%'}
              height={'100%'}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                borderRadius={3}
                display={'flex'}
                flexDirection={'column'}
                bgcolor={themeMode === 'dark' ? 'none' : '#b8b8b8'}
              >
                {i === 10 ? (
                  <Box
                    sx={{
                      height: '10%',
                      width: '30%',
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={item.companyLogo}
                      alt={item.href}
                    />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      height: '10%',
                      width: '30%',
                      marginTop: 3,
                      marginLeft: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={item.companyLogo}
                      alt={item.href}
                    />
                  </Box>
                )}

                <Box component={CardContent}>
                  <Box maxWidth={300} marginY={2}>
                    <Typography
                      align={'left'}
                      variant={'body2'}
                      color="textDark"
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'flex-start'}>
                  <Typography underline="none" color={'textPrimary'}>
                    <Button
                      size="large"
                      endIcon={
                        <svg
                          width={16}
                          height={16}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      }
                    >
                      Leer más
                    </Button>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Stories.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Stories;
