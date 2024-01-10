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
import alam from '../../../../../svg/illustrations/nube-publica.jpg';
import Card from '@mui/material/Card';
import ExpandIcon from '@mui/icons-material/Expand';
import PublicIcon from '@mui/icons-material/Public';
import SavingsIcon from '@mui/icons-material/Savings';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

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
                ¿Cuáles son las ventajas de utilizar
              </Typography>{' '}
              nube pública?
            </Box>
            <Typography component={'p'}>
              Es importante tener en cuenta que, aunque la nube pública ofrece
              muchas ventajas, también plantea desafíos, como preocupaciones de
              seguridad y privacidad, costos continuos de suscripción y posibles
              limitaciones de personalización. La elección de utilizar una nube
              pública debe basarse en las necesidades específicas de tu
              organización y tus objetivos comerciales.
              <br />
              El uso de una nube pública tiene varias ventajas que pueden
              beneficiar a empresas y usuarios en una variedad de situaciones.
              Algunas de las ventajas más destacadas de utilizar una nube
              pública incluyen:
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
                    <ExpandIcon />
                  </svg>
                ),
                title: 'Escalabilidad',
                subtitle:
                  'Las nubes públicas ofrecen recursos informáticos escalables bajo demanda.',
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
                    <PublicIcon />
                  </svg>
                ),
                title: 'Acceso global',
                subtitle:
                  ' Los servicios en la nube pública están disponibles a través de internet desde cualquier lugar del mundo con conexión a la red. ',
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
                    <SavingsIcon />
                  </svg>
                ),
                title: 'Costos reducidos',
                subtitle:
                  'Elimina la necesidad de comprar y mantener hardware y software localmente, lo que reduce los gastos de capital y permite a las organizaciones pagar solo por los recursos que utilizan.',
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
                    <BrowserUpdatedIcon />
                  </svg>
                ),
                title: 'Actualizaciones automáticas',
                subtitle:
                  'Los proveedores de nube se encargan de mantener y actualizar la infraestructura subyacente y el software, lo que garantiza que siempre estés utilizando versiones actualizadas.',
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
                    <RestartAltIcon />
                  </svg>
                ),
                title: 'Respaldo y recuperación de datos',
                subtitle:
                  'Ofrecemos servicios de respaldo y recuperación de datos, lo que ayuda a proteger tus datos contra pérdidas o desastres.',
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
                    <TipsAndUpdatesIcon />
                  </svg>
                ),
                title: 'Innovación constante',
                subtitle:
                  'Introducimos  nuevas características y servicios con regularidad, lo que te permite aprovechar la innovación tecnológica sin la necesidad de actualizar la infraestructura por tu cuenta.',
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
