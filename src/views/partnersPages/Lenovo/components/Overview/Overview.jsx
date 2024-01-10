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
import LaptopMacSharpIcon from '@mui/icons-material/LaptopMacSharp';
import LaptopWindowsSharpIcon from '@mui/icons-material/LaptopWindowsSharp';
import ComputerSharpIcon from '@mui/icons-material/ComputerSharp';
import StorageSharpIcon from '@mui/icons-material/StorageSharp';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

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
            title: 'ThinkPad',
            subtitle:
              ' Una de las líneas de productos más icónicas de Lenovo es la serie ThinkPad, que incluye computadoras portátiles duraderas y confiables dirigidas principalmente a empresas y profesionales.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <LaptopWindowsSharpIcon />
              </svg>
            ),
            color: colors.lightBlue,
            lessons: [
              'ThinkPad X1 Carbon',
              'ThinkPad T Series',
              'ThinkPad X Series',
              'ThinkPad P Series',
              'ThinkPad L Series',
            ],
          },
          {
            title: 'IdeaPad',
            subtitle:
              'La serie IdeaPad de Lenovo se enfoca en computadoras portátiles y dispositivos 2 en 1 dirigidos al mercado de consumo y de consumo empresarial.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <ComputerSharpIcon />
              </svg>
            ),
            color: colors.pink,
            lessons: [
              'IdeaPad Flex',
              'IdeaPad Slim',
              'IdeaPad Gaming',
              'IdeaPad L Series',
              'IdeaPad C Series',
            ],
          },
          {
            title: 'Servidores y almacenamiento',
            subtitle:
              'Lenovo ofrece soluciones de servidores y almacenamiento para empresas, ayudando a las organizaciones a gestionar sus datos y aplicaciones en entornos de centros de datos.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <StorageSharpIcon />
              </svg>
            ),
            color: colors.deepOrange,
            lessons: [
              'ThinkSystem SR Series',
              'ThinkSystem ST Series',
              'ThinkSystem SN Series',
              'ThinkSystem SE Series',
              'ThinkSystem Cloud Servers',
              'Storage Servers',
              'BladeCenter',
              'Flex System',
            ],
          },
          {
            title: 'Accesorios y Periféricos',
            subtitle:
              'La empresa ofrece una variedad de accesorios y periféricos, como monitores, teclados, ratones y dispositivos de almacenamiento.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <HomeRepairServiceIcon />
              </svg>
            ),
            color: colors.teal,
            lessons: [
              'Teclados y Ratones',
              'Monitores',
              'Estaciones de acoplamiento',
              'Almacenamiento Externo',
              'Lápices ópticos y pantallas táctiles',
              'Docking Stations USB-C',
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
