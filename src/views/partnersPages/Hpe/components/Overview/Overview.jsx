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
import StorageIcon from '@mui/icons-material/Storage';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import DnsIcon from '@mui/icons-material/Dns';
import SettingsSystemDaydreamSharpIcon from '@mui/icons-material/SettingsSystemDaydreamSharp';

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
          <br />
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {[
          {
            title: 'Infraestructura de TI',
            subtitle:
              'HPE ofrece soluciones de infraestructura de TI que incluyen servidores, almacenamiento y redes. Esto abarca desde servidores estándar hasta sistemas hiperconvergentes y soluciones de almacenamiento de alto rendimiento.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <StorageIcon />
              </svg>
            ),
            color: colors.blueGrey,
            lessons: [
              'Hardware y Software',
              'Almacenamiento de datos',
              'Alimentación y energía de respaldo',
            ],
          },
          {
            title: 'Nube Híbrida',
            subtitle:
              'HPE ofrece soluciones de nube híbrida que permiten a las empresas combinar sus recursos de nube pública y privada para lograr una mayor flexibilidad y eficiencia en la gestión de cargas de trabajo y aplicaciones.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <CloudSyncIcon />
              </svg>
            ),
            color: colors.lightBlue,
            lessons: [
              'Integración de nube pública y privada',
              'Seguridad y control',
              'Eficiencia de costos',
            ],
          },
          {
            title: 'Consultoría y soporte',
            subtitle:
              'HPE proporciona servicios de consultoría, implementación y soporte técnico para ayudar a las empresas a planificar, implementar y mantener sus soluciones tecnológicas de manera efectiva.',
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
            color: colors.pink,
            lessons: [
              'Asesoramiento experto',
              'Análisis y evaluación',
              'Planificación estratégica',
              'Diseño de soluciones',
              'Implementación de proyectos',
              'Evaluación de riesgos',
            ],
          },
          {
            title: 'Almacenamiento SAN y NAS',
            subtitle:
              'HPE ofrece soluciones de almacenamiento de datos que incluyen sistemas de almacenamiento en red (NAS) y almacenamiento de área de almacenamiento (SAN), así como soluciones de gestión de datos y análisis.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <SdStorageIcon />
              </svg>
            ),
            color: colors.cyan,
            lessons: [
              'Protocolos de acceso',
              'Sistema de archivos compartido',
              'Administración centralizada',
              'Copias de Seguridad y Recuperación',
            ],
          },
          {
            title: 'Edge Computing',
            subtitle:
              'HPE se enfoca en soluciones de computación en el borde (edge computing) que permiten procesar datos y ejecutar aplicaciones cerca de donde se generan, lo que es crucial para casos de uso como IoT (Internet de las cosas) y análisis en tiempo real.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <SettingsSystemDaydreamSharpIcon />
              </svg>
            ),
            color: colors.lightGreen,
            lessons: [
              'Procesamiento en tiempo real',
              'Automatización industrial',
              'Sistemas de detección de anomalías',
            ],
          },
          {
            title: 'Hardware',
            subtitle:
              'HPE ha desarrollado soluciones de servidores tanto para empresas como para centros de datos, incluyendo servidores blade, sistemas de almacenamiento en red (NAS) y almacenamiento de área de almacenamiento (SAN).',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <DnsIcon />
              </svg>
            ),
            color: colors.deepPurple,
            lessons: [
              'HPE ProLiant',
              'HPE Integrity',
              'HPE Apollo',
              'HPE Superdome',
              'HPE Cloudline',
              'HPE Edgeline',
              'HPE Synergy',
              'HPE NonStop',
              'HPE SimpliVity'
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
