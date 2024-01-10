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
import BackupIcon from '@mui/icons-material/Backup';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

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
            title: 'Veeam Backup & Replication',
            subtitle:
              'Esta es la solución principal de Veeam y se utiliza para realizar copias de seguridad y replicar datos en entornos virtuales y de nube.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <BackupIcon />
              </svg>
            ),
            color: colors.blueGrey,
            lessons: [
              'Copia de seguridad de máquinas virtuales',
              'Copia de seguridad en disco',
              'Compresión y deduplicación',
              'Copia de seguridad incremental',
              'Recuperación Rápida',
            ],
          },
          {
            title: 'Veeam ONE',
            subtitle:
              'Una solución de supervisión y generación de informes que ayuda a las organizaciones a monitorear y administrar su infraestructura de TI virtualizada y garantizar la disponibilidad continua.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <PlusOneIcon />
              </svg>
            ),
            color: colors.lightBlue,
            lessons: [
              'Monitorización centralizada',
              'Informes y dashboards',
              'Alertas en tiempo real',
              'Visibilidad en el rendimiento',
              'Análisis de rendimiento histórico',
              'Planificación de recursos',
              'Administración de alertas',
            ],
          },
          {
            title: 'Veeam Availability Suite',
            subtitle:
              'Esta suite combina Veeam Backup & Replication con Veeam ONE para proporcionar una solución completa de disponibilidad de datos que incluye copia de seguridad, recuperación y monitoreo.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <ViewInArIcon />
              </svg>
            ),
            color: colors.pink,
            lessons: [
              'Copia de seguridad y recuperación',
              'Alta Disponibilidad (HA)',
              'Recuperación ante Desastres (DR)',
              'Replicación',
            ],
          },
          {
            title: 'Veeam Backup en Microsoft Office 365',
            subtitle:
              'Permite a las organizaciones realizar copias de seguridad de los datos de Office 365, como correos electrónicos, calendarios y documentos, para protegerlos contra la pérdida de datos y la eliminación accidental.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <AttachFileIcon />
              </svg>
            ),
            color: colors.cyan,
            lessons: [
              'Copia de Seguridad de Office 365',
              'Recuperación de datos',
              'Almacenamiento local y en la nube',
              'Planificación de copias de seguridad',
              'Auditoría y cumplimiento',
            ],
          },
          {
            title: 'Veeam Cloud Connect',
            subtitle:
              'Facilita la copia de seguridad en la nube y la recuperación de desastres al permitir a las organizaciones utilizar proveedores de servicios en la nube para almacenar y recuperar datos de manera segura.',
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
            color: colors.deepOrange,
            lessons: [
              'Copias de seguridad en la nube',
              'Recuperación en la nube',
              'Portales de autoservicio',
              'Multi-Tenant',
            ],
          },
          {
            title: 'Veeam Backup en AWS',
            subtitle:
              'Ofrecen soluciones de copia de seguridad y recuperación para entornos de nube pública en AWS (Amazon Web Services)',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <FilterDramaIcon />
              </svg>
            ),
            color: colors.purple,
            lessons: [
              'Copia de seguridad y recuperación',
              'Copia de seguridad en cinta',
              'Planificación de recursos',
            ],
          },
          {
            title: 'Veeam Backup en Microsoft Azure',
            subtitle:
              'Ofrecen soluciones de copia de seguridad y recuperación para entornos de nube pública en Azure (Microsoft Azure).',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <CloudDoneIcon />
              </svg>
            ),
            color: colors.lightGreen,
            lessons: [
              'Integración con Azure AD',
              'Compatibilidad multiplataforma',
              'Restauración granular',
              'Copia de seguridad de máquinas virtuales Azure',
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
