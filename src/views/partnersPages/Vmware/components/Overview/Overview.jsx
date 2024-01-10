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
import SdStorageIcon from '@mui/icons-material/SdStorage';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import DnsIcon from '@mui/icons-material/Dns';
import DvrIcon from '@mui/icons-material/Dvr';

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
            title: 'VMware vSphere',
            subtitle:
              'Es una plataforma de virtualización de servidores que permite a las organizaciones crear y administrar máquinas virtuales en sus centros de datos. Esto ayuda a consolidar servidores físicos, aumentar la flexibilidad y la disponibilidad de recursos y simplificar la administración.',
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
            lessons: [],
          },
          {
            title: 'VMware ESXi',
            subtitle:
              'Es un hipervisor de tipo 1 (o hipervisor bare-metal) que proporciona la base para la virtualización en servidores. Se instala directamente en el hardware del servidor y permite ejecutar múltiples máquinas virtuales en un solo servidor físico.',
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
            color: colors.lightBlue,
            lessons: [],
          },
          {
            title: 'VMware vCenter Server',
            subtitle:
              ' Es una herramienta de gestión centralizada que permite administrar múltiples servidores ESXi desde una ubicación central. Facilita la gestión de recursos, la migración en caliente de máquinas virtuales y otras tareas de administración.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <VideogameAssetIcon />
              </svg>
            ),
            color: colors.pink,
            lessons: [],
          },
          {
            title: 'VMware NSX',
            subtitle:
              'Es una plataforma de virtualización de redes que permite crear redes virtuales, aislar y asegurar cargas de trabajo, y automatizar tareas de red dentro de un entorno virtualizado.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <VpnLockIcon />
              </svg>
            ),
            color: colors.cyan,
            lessons: [],
          },
          {
            title: 'VMware vSAN',
            subtitle:
              'Es una solución de almacenamiento definida por software que permite utilizar el almacenamiento local en servidores para crear un almacenamiento compartido y altamente disponible.',
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
            color: colors.deepOrange,
            lessons: [],
          },
          {
            title: 'VMware Horizon',
            subtitle:
              'Es una plataforma de virtualización de escritorios y aplicaciones que permite a las organizaciones ofrecer escritorios y aplicaciones virtuales a usuarios finales, lo que facilita la administración y la entrega de aplicaciones.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <DvrIcon />
              </svg>
            ),
            color: colors.purple,
            lessons: [],
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
