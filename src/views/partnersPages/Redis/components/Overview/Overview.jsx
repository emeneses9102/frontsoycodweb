import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { colors } from '@mui/material';
import LanIcon from '@mui/icons-material/Lan';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MemoryIcon from '@mui/icons-material/Memory';
import TerminalIcon from '@mui/icons-material/Terminal';

const Overview = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Potencia tu éxito con nuestros servicios profesionales
        </Box>
        <Typography align={'center'} color="textSecondary" variant={'h6'}>
          Diseñamos y desarrollamos increíbles soluciones para todo tipo de
          empresas.
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {[
          {
            title: 'Alta disponibilidad',
            subtitle:
              'Redis Enterprise ofrece alta disponibilidad incorporada y persistencia de datos, lo que garantiza que tus datos estén seguros y accesibles incluso en caso de fallos de hardware.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <LanIcon />
              </svg>
            ),
            color: colors.blueGrey,
            lessons: [
              'Replicación',
              'Recuperación automática',
              'Detección de fallos',
              'Continuidad del negocio',
            ],
          },
          {
            title: 'Escalabilidad',
            subtitle:
              'Proporciona capacidades de escalabilidad horizontal, lo que te permite escalar tu base de datos Redis horizontalmente a través de múltiples nodos para manejar cargas de trabajo y volúmenes de datos más grandes.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <OpenInFullIcon />
              </svg>
            ),
            color: colors.lightBlue,
            lessons: [
              'Escalabilidad horizontal',
              'Escalabilidad vertical',
              'Auto-escalado',
              'Particionamiento',
            ],
          },
          {
            title: 'Geo-distribución activa-activa',
            subtitle:
              'Redis Enterprise admite la distribución activa-activa de datos en múltiples regiones geográficas, lo que es útil para construir aplicaciones distribuidas globalmente con acceso de baja latencia a los datos.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <LocationOnIcon />
              </svg>
            ),
            color: colors.pink,
            lessons: [
              'Multi-region',
              'Sincronización de datos',
              'Failover global',
              'Control de latencia',
            ],
          },
          {
            title: 'Seguridad empresarial',
            subtitle:
              'Redis Enterprise ofrece diversas características de seguridad, incluida la autenticación, la encriptación en tránsito y en reposo, y el control de acceso basado en roles (RBAC) para proteger tus datos.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <LocalPoliceIcon />
              </svg>
            ),
            color: colors.cyan,
            lessons: [
              'Control de Acceso Basado en Roles (RBAC)',
              'Encriptación en reposo',
              'Firewalls y listas de control de acceso (ACL)',
              'Encriptación en tránsito',
            ],
          },
          {
            title: 'Módulos de Redis',
            subtitle:
              'Admite los módulos de Redis, que son extensiones que agregan funcionalidad adicional a Redis. Estos módulos pueden utilizarse para mejorar las capacidades de Redis para casos de uso específicos, como búsqueda, análisis y más.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <ViewModuleIcon />
              </svg>
            ),
            color: colors.deepOrange,
            lessons: [
              'Redis Search',
              'Redis JSON',
              'Redis Graph',
              'Redis Bloom',
              'Redis Time Series',
              'Redis Artificial Intelligence',
              'Redis Gears',
            ],
          },
          {
            title: 'Supervisión y gestión',
            subtitle:
              'Redis Enterprise proporciona herramientas completas de supervisión y gestión para ayudarte a controlar el rendimiento y la salud de tus clústeres Redis, configurar alertas y gestionar tus instancias Redis de manera efectiva.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <TroubleshootIcon />
              </svg>
            ),
            color: colors.purple,
            lessons: [
              'Herramientas de diagnóstico',
              'Alertas configurables',
              'Métricas de rendimiento',
              'Visualización de datos',
            ],
          },
          {
            title: 'Soporte y mantenimiento',
            subtitle:
              'Redis Labs proporciona soporte comercial, mantenimiento y servicios profesionales para Redis Enterprise para garantizar su confiabilidad y rendimiento en entornos de producción.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <SupportAgentIcon />
              </svg>
            ),
            color: colors.lightGreen,
            lessons: [
              'Soporte técnico 24/7',
              'Expertos en Redis',
              'Asistencia en problemas críticos',
              'Servicios profesionales',
            ],
          },
          {
            title: 'Redis en Flash y RAM',
            subtitle:
              'Redis Enterprise te permite utilizar una combinación de memoria RAM y memoria Flash para almacenar conjuntos de datos grandes, optimizando el costo y el rendimiento para cargas de trabajo con volúmenes de datos extensos.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <MemoryIcon />
              </svg>
            ),
            color: colors.teal,
            lessons: [
              'Ampliación de la capacidad',
              'Rendimiento Adecuado',
              'Tecnología de compresión',
              'Política de evicción inteligente',
              'Reducción de costos',
            ],
          },
          {
            title: 'Herramientas para desarrolladores',
            subtitle:
              'Ofrece características amigables para los desarrolladores, como Redis Streams para el registro de eventos, RediSearch para la indexación de texto completo y RedisGraph para capacidades de base de datos de gráficos.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <TerminalIcon />
              </svg>
            ),
            color: colors.brown,
            lessons: [
              'Compatibilidad con contenedores y orquestadores',
              'Documentación y recursos de desarrollo',
              'APIs de cliente',
              'Herramientas de línea de comandos (CLI)',
              'Integración con DevOps',
            ],
          },
        ].map((item, i) => (
          <Grid item xs={12} key={i}>
            <Grid
              container
              spacing={isMd ? 4 : 2}
              flexDirection={i % 2 === 1 ? 'row-reverse' : 'row'}
            >
              <Grid
                item
                xs={12}
                md={6}
                data-aos={isMd ? 'fade-right' : 'fade-up'}
              >
                <Box
                  component={Card}
                  display={'flex'}
                  alignItems={'center'}
                  width={'100%'}
                  height={'100%'}
                  bgcolor={item.color[themeMode === 'light' ? 50 : 900]}
                  boxShadow={0}
                >
                  <CardContent>
                    <Box
                      component={Avatar}
                      width={60}
                      height={60}
                      marginBottom={6}
                      bgcolor={item.color[themeMode === 'light' ? 900 : 50]}
                      boxShadow={4}
                    >
                      <Box color={item.color[themeMode === 'light' ? 50 : 900]}>
                        {item.icon}
                      </Box>
                    </Box>
                    <Typography color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                data-aos={isMd ? 'fade-left' : 'fade-up'}
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  width={'100%'}
                  height={'100%'}
                >
                  <Box marginBottom={2}>
                    <Box
                      component={Typography}
                      variant={'h4'}
                      gutterBottom
                      fontWeight={600}
                    >
                      {item.title}
                    </Box>
                  </Box>
                  <Grid container spacing={1}>
                    {item.lessons.map((lesson, j) => (
                      <Grid item xs={12} key={j}>
                        <Box
                          component={ListItem}
                          disableGutters
                          width={'auto'}
                          padding={0}
                        >
                          <Box
                            component={ListItemAvatar}
                            minWidth={'auto !important'}
                            marginRight={2}
                          >
                            <Box
                              component={Avatar}
                              bgcolor={theme.palette.secondary.main}
                              width={20}
                              height={20}
                            >
                              <svg
                                width={12}
                                height={12}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <ListItemText primary={lesson} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Overview.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Overview;
