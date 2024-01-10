import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import SkeletonC from '../../../../../svg/components/SkeletonC';
import LazyLoadinComponent from '../../../../../svg/components/LazyLoadingComponent';
import alam from '../../../../../svg/illustrations/virtualizacion-de-servidores.jpg';
import Card from '@mui/material/Card';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TerminalIcon from '@mui/icons-material/Terminal';

const Services3 = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid
        container
        spacing={4}
        marginTop={3}
        direction={isMd ? 'row' : 'row'}
      >
        <Grid item xs={12} md={12} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Box
              component={Typography}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              <Typography color="primary" variant="inherit" component="span">
                ¿Cuáles son las ventajas de implementar
              </Typography>{' '}
              virtualización?
            </Box>
            <Typography component={'p'}>
              La implementación de la virtualización ofrece una serie de
              ventajas que pueden ser beneficiosas para las organizaciones en
              términos de eficiencia, flexibilidad y administración de recursos
              informáticos. Aquí están algunas de las ventajas clave de
              implementar la virtualización:
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <List disablePadding>
            {[
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <SafetyDividerIcon />
                  </svg>
                ),
                title: 'Consolidación de recursos',
                subtitle:
                  'La virtualización permite consolidar múltiples servidores físicos en un servidor físico más potente, lo que reduce la cantidad de hardware necesario y ahorra espacio físico.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <SettingsSuggestIcon />
                  </svg>
                ),
                title: 'Mayor utilización de recursos',
                subtitle:
                  'Al permitir la ejecución de múltiples máquinas virtuales en un solo servidor físico, se mejora la utilización de los recursos de hardware, lo que puede resultar en un ahorro de costos significativo.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <OpenInFullIcon />
                  </svg>
                ),
                title: 'Escalabilidad',
                subtitle:
                  'La virtualización facilita la escalabilidad, ya que es más fácil agregar nuevas máquinas virtuales para satisfacer las demandas cambiantes de recursos, lo que acelera el aprovisionamiento de servicios.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <AdminPanelSettingsIcon />
                  </svg>
                ),
                title: 'Aislamiento de recursos',
                subtitle:
                  'Las máquinas virtuales se ejecutan de forma aislada unas de otras, lo que mejora la seguridad y evita que un fallo en una máquina virtual afecte a otras.',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <TerminalIcon />
                  </svg>
                ),
                title: 'Flexibilidad de software',
                subtitle:
                  'La virtualización permite ejecutar múltiples sistemas operativos en el mismo servidor físico, lo que es útil para probar y ejecutar diferentes aplicaciones y sistemas en un entorno compartido.',
              },
            ].map((item, index) => (
              <ListItem key={index} disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Box
                    component={Avatar}
                    variant={'rounded'}
                    color={theme.palette.primary.dark}
                    bgcolor={`${theme.palette.primary.light}22`}
                  >
                    {item.icon}
                  </Box>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
        >
          <Box maxWidth={600} width={'100%'}>
            {loading ? (
              <SkeletonC heightFrom={100} />
            ) : (
              <Box
                component={Card}
                boxShadow={2}
                height={'100%'}
                width={'100%'}
              >
                <LazyLoadinComponent
                  width={'100%'}
                  height={'100%'}
                  src={alam}
                  title={'...'}
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services3;
