import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { colors } from '@mui/material';
import Container from '../../../../../common/Container';
import CellTowerIcon from '@mui/icons-material/CellTower';
import StorageIcon from '@mui/icons-material/Storage';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { NavLink } from 'react-router-dom';

const Services = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }
  if (isLg) {
    slidesToShow = 4;
  }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box>
      <Container paddingY={'0 !important'}>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
          ></Typography>
          <Typography
            component={'h2'}
            fontWeight={700}
            variant={'h2'}
            gutterBottom
          >
            Servicios y soluciones de alto impacto
          </Typography>
          <Typography variant={'h6'} component={'p'} color={'textSecondary'}>
            Escalables, flexibles, especificas y adecuadas a su presupuesto
          </Typography>
        </Box>
      </Container>
      <Box>
        <Slider {...sliderOpts}>
          {[
            {
              title: 'Redes',
              href: '/portafolio-de-soluciones-redes',
              subtitle:
                'Trabaja de manera ininterrumpida y segura desde el hogar u oficina.',
              icon: (
                <svg
                  width={48}
                  height={48}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <CellTowerIcon />
                </svg>
              ),
              color: colors.purple,
            },
            {
              title: 'Data Center',
              href: '/portafolio-de-soluciones-data-center',
              subtitle:
                'Adquiere tu infraestructura bajo un esquema de pago por consumo.',
              icon: (
                <svg
                  width={48}
                  height={48}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <StorageIcon />
                </svg>
              ),
              color: colors.green,
            },
            {
              title: 'Aplicaciones de Movilidad',
              href: '/portafolio-de-soluciones-en-aplicaciones-de-movilidad',
              subtitle:
                'Soluciones especializadas en Almacenes, CEDIS y Fullfillments.',
              icon: (
                <svg
                  width={48}
                  height={48}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <TabletMacIcon />
                </svg>
              ),
              color: colors.pink,
            },
            {
              title: 'Seguridad Informática',
              href: '/portafolio-de-soluciones-en-seguridad-informatica',
              subtitle:
                'Protege tu información contra cualquier tipo de amenaza.',
              icon: (
                <svg
                  width={48}
                  height={48}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <VerifiedUserIcon />
                </svg>
              ),
              color: colors.orange,
            },
          ].map((item, i) => (
            <Box padding={{ xs: 1, md: 2, lg: 3 }} key={i}>
              <Box
                component={NavLink}
                to={item.href}
                display={'block'}
                width={'100%'}
                height={'100%'}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  boxShadow={{ xs: 1, sm: 3 }}
                  borderRadius={5}
                >
                  <Box
                    component={CardContent}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    padding={{ xs: 2, sm: 4, md: 6 }}
                    sx={{
                      '&:last-child': {
                        paddingBottom: { xs: 2, sm: 4, md: 6 },
                      },
                    }}
                  >
                    <Box
                      component={Avatar}
                      variant="rounded"
                      width={84}
                      height={84}
                      marginBottom={2}
                      bgcolor={
                        themeMode === 'light' ? item.color[50] : item.color[200]
                      }
                      borderRadius={5}
                    >
                      <Box
                        color={item.color[themeMode === 'light' ? 500 : 700]}
                      >
                        {item.icon}
                      </Box>
                    </Box>
                    <Box
                      component={Typography}
                      variant={'h6'}
                      gutterBottom
                      fontWeight={500}
                      align={'center'}
                    >
                      {item.title}
                    </Box>
                    <Typography align={'center'} color="textSecondary">
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

Services.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Services;
