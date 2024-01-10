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
import alam from '../../../../../svg/illustrations/ciberseguridad3.jpg';
import Card from '@mui/material/Card';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';

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
              ciberseguridad?
            </Box>
            <Typography component={'p'}>
              La ciberseguridad es una inversión esencial para proteger la
              información, la privacidad y la integridad de los datos en un
              mundo digital. Ayuda a prevenir daños financieros, pérdida de
              reputación y problemas legales, y es esencial para mantener la
              confianza de los clientes y la continuidad del negocio en la era
              digital.
              <br />
              La implementación de ciberseguridad conlleva una serie de ventajas
              significativas para individuos, empresas y organizaciones en
              general. Aquí están algunas de las principales ventajas de contar
              con una sólida estrategia de ciberseguridad:
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
                    <VerifiedUserRoundedIcon />
                  </svg>
                ),
                title: 'Protección de datos sensibles',
                subtitle:
                  'La ciberseguridad protege los datos confidenciales y sensibles de accesos no autorizados y robos. Esto incluye información personal, financiera y empresarial.',
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
                    <PolicyRoundedIcon />
                  </svg>
                ),
                title: 'Prevención de ataques cibernéticos',
                subtitle:
                  ' Una estrategia de ciberseguridad efectiva ayuda a prevenir ataques cibernéticos, como virus, malware y ransomware, que pueden causar daño a sistemas y redes.',
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
                    <AllInclusiveRoundedIcon />
                  </svg>
                ),
                title: 'Continuidad del negocio',
                subtitle:
                  'La ciberseguridad contribuye a garantizar la continuidad del negocio al prevenir interrupciones y pérdidas de datos que podrían paralizar una organización.',
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
                    <VolunteerActivismRoundedIcon />
                  </svg>
                ),
                title: 'Confianza del cliente',
                subtitle:
                  ' La inversión en ciberseguridad demuestra a los clientes que sus datos están protegidos y que la organización se preocupa por su privacidad y seguridad.',
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
                    <WorkspacePremiumRoundedIcon />
                  </svg>
                ),
                title: 'Cumplimiento normativo',
                subtitle:
                  'Muchas industrias y organizaciones están sujetas a regulaciones de seguridad de datos y ciberseguridad. Cumplir con estas regulaciones evita sanciones legales y multas.',
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
                    <SavingsRoundedIcon />
                  </svg>
                ),
                title: 'Reducción de costos a largo plazo',
                subtitle:
                  'Si bien la inversión inicial en ciberseguridad puede ser significativa, la prevención de brechas de seguridad y ataques puede ahorrar a una organización grandes costos a largo plazo en términos de recuperación, reparación y posibles demandas.',
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
