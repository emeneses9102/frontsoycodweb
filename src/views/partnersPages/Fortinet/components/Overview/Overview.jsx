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
import SecuritySharpIcon from '@mui/icons-material/SecuritySharp';
import VpnLockSharpIcon from '@mui/icons-material/VpnLockSharp';
import VpnKeySharpIcon from '@mui/icons-material/VpnKeySharp';
import TroubleshootSharpIcon from '@mui/icons-material/TroubleshootSharp';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
import PolicyIcon from '@mui/icons-material/Policy';

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
            title: 'Firewalls y dispositivos de seguridad de red',
            subtitle:
              'Fortinet es ampliamente conocida por sus firewalls y dispositivos de seguridad de red, que proporcionan protección contra intrusiones, filtrado de contenido web, prevención de amenazas avanzadas y otros servicios de seguridad en el perímetro de la red.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <SecuritySharpIcon />
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
            title: 'Seguridad en la nube',
            subtitle:
              'La empresa ofrece soluciones de seguridad de nube que protegen los entornos de nube pública y privada, permitiendo a las organizaciones aprovechar la nube de manera segura.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <VpnLockSharpIcon />
              </svg>
            ),
            color: colors.lightBlue,
            lessons: ['WAS', 'SASE', 'SIEM', 'IAM', 'PAM'],
          },
          {
            title: 'Protección contra amenazas avanzadas (ATP)',
            subtitle:
              'Fortinet ofrece soluciones de prevención de amenazas avanzadas que incluyen sistemas de detección y respuesta ante amenazas, análisis de seguridad y herramientas para combatir malware y ataques dirigidos.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <PolicyIcon />
              </svg>
            ),
            color: colors.pink,
            lessons: [
              'Detección de malware avanzado',
              'Análisis de comportamiento',
              'Protección contra amenazas dirigidas',
              'Análisis de tráfico de red',
            ],
          },
          {
            title: 'Acceso seguro y VPN',
            subtitle:
              'Fortinet proporciona soluciones de acceso seguro y redes privadas virtuales (VPN) para garantizar que las conexiones remotas y móviles sean seguras y protegidas.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <VpnKeySharpIcon />
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
            title: 'Seguridad en Data Center',
            subtitle:
              'La empresa ofrece herramientas y plataformas de gestión de seguridad que permiten a las organizaciones supervisar y administrar de manera centralizada su postura de seguridad.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <TroubleshootSharpIcon />
              </svg>
            ),
            color: colors.deepOrange,
            lessons: ['DDOS', 'SOAR', 'EDR', 'CAASD'],
          },
          {
            title: 'Seguridad en OT & IoT',
            subtitle:
              'Fortinet se involucra en la seguridad del Internet de las Cosas, proporcionando soluciones para proteger dispositivos y sistemas conectados en entornos empresariales e industriales.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <AdminPanelSettingsSharpIcon />
              </svg>
            ),
            color: colors.purple,
            lessons: [
              'Evaluación de riesgos',
              'Seguridad de red',
              'Protección de dispositivos',
              'Monitoreo y detección de amenazas',
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
