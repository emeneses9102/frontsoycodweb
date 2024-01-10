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
import CellWifiSharpIcon from '@mui/icons-material/CellWifiSharp';
import LanSharpIcon from '@mui/icons-material/LanSharp';
import GppGoodSharpIcon from '@mui/icons-material/GppGoodSharp';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';


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
            title: 'Redes inalámbricas',
            subtitle:
              'Aruba ofrece soluciones de redes inalámbricas empresariales que incluyen puntos de acceso (access points), controladores de movilidad, y software de gestión. Estas soluciones permiten a las empresas establecer redes Wi-Fi seguras y escalables para sus empleados y visitantes.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <CellWifiSharpIcon />
              </svg>
            ),
            color: colors.blueGrey,
            lessons: [
              'Estudios de cobertura',
              'Site Survey: predictivo, pasivo y activo',
              'Diseño de redes inalámbricas',
              'Implementación, configuración, puesta en marcha',
              'Servicios de SD-WAN, SD-BRANCH, micro branch',
            ],
          },
          {
            title: 'Redes cableadas',
            subtitle:
              'Además de las redes inalámbricas, Aruba también ofrece soluciones de redes cableadas que incluyen conmutadores (switches) de red y software de gestión para crear y administrar redes de área local (LAN) con alto rendimiento y seguridad.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <LanSharpIcon />
              </svg>
            ),
            color: colors.lightBlue,
            lessons: [
              'Diseño de redes alámbricas',
              'Implementación, configuración, puesta en marcha',
              'Cableado estructurado',
              'Testeo y certificación de cableado',
              'Fusión y empalmes de fibra óptica',
            ],
          },
          {
            title: 'Network as a Services NAAS',
            subtitle:
              'En lugar de comprar, mantener y gestionar su propia infraestructura de red, las organizaciones pueden contratar servicios de red a proveedores de NaaS para satisfacer sus necesidades de conectividad y gestión de redes.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <SettingsSuggestIcon />
              </svg>
            ),
            color: colors.purple,
            lessons: [
              'Servicios administrados de red',
              'Servicios administrados de NOC y SOC',
              'Servicios administrados de dispositivos en la red (DAAS)',
              'Servicios de gestión de dispositivos móviles (MDM) ',
              'Pólizas y bolsas de horas de soporte',
              'Servicios de monitoreo',
            ],
          },
          {
            title: 'Seguridad en red',
            subtitle:
              'Aruba se enfoca en la seguridad de redes y ofrece soluciones para proteger las redes empresariales contra amenazas cibernéticas. Esto incluye herramientas para la detección y respuesta ante amenazas, así como autenticación y control de acceso.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <GppGoodSharpIcon />
              </svg>
            ),
            color: colors.pink,
            lessons: [
              'Servicios de seguridad SASE',
              'Servicios de ZTNA',
              'Servicio de control acceso a la red (NAC)',
              'Servicios de portal cautivo',
              'Implementación, configuración, puesta en marcha',
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
