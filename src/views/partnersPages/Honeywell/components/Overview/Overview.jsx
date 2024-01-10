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
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AirportShuttleSharpIcon from '@mui/icons-material/AirportShuttleSharp';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

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
            title: 'Movilidad empresarial',
            subtitle:
              'La movilidad empresarial se ha convertido en un componente crítico de la estrategia de TI de muchas organizaciones debido a la creciente dependencia de la fuerza laboral en la movilidad y la flexibilidad para llevar a cabo tareas laborales en cualquier lugar y en cualquier momento.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <ApartmentIcon />
              </svg>
            ),
            color: colors.blueGrey,
            lessons: [
              'IoT',
              'Domótica',
              'CCTV',
              'Control de accessos',
            ],
          },
          {
            title: 'Movilidad lógistica',
            subtitle:
              'La movilidad logística se ha vuelto fundamental en la industria para garantizar la entrega eficaz y oportuna de productos y para mejorar la gestión de inventario y los procesos logísticos.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <AirportShuttleSharpIcon  />
              </svg>
            ),
            color: colors.lightBlue,
            lessons: [
              'Handhelds',
              'Impresoras',
              'Telemetría',
              'GPS',
            ],
          },
          {
            title: 'Movilidad retail',
            subtitle:
              'Esta integración permite a las empresas minoristas utilizar dispositivos móviles, como smartphones y tabletas, para mejorar la experiencia de compra de los clientes, optimizar las operaciones internas y brindar servicios más personalizados.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              > 
                <WarehouseIcon />
              </svg>
            ),
            color: colors.pink,
            lessons: [
              'Handhelds',
              'Puntos de venta',
              'PDA',
              'Tablets',
            ],
          },
          {
            title: 'Movilidad en la educación',
            subtitle:
              'Esta forma de educación aprovecha la tecnología móvil y la conectividad a Internet para brindar oportunidades de aprendizaje más accesibles y personalizadas.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <CastForEducationIcon />
              </svg>
            ),
            color: colors.deepOrange,
            lessons: [
              'Pizarorones interactivos',
              'Comunicaciones unificadas',
              'Videoconferencia',
            ],
          },
          {
            title: 'Movilidad en hospitalidad y salud',
            subtitle:
              'Estos dos sectores utilizan la movilidad de diferentes maneras para brindar un servicio más eficiente, personalizado y accesible.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <LocalHospitalIcon />
              </svg>
            ),
            color: colors.deepPurple,
            lessons: [
              'RFID',
              'Beacons',
              'GPS',
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
