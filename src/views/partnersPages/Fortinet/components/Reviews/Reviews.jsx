import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Reviews = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const GridItemHeadlineBlock = () => (
    <Box>
      <Box marginBottom={2}>
        <Box
          component={Typography}
          variant="h3"
          fontWeight={'700'}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
        >
         ¿Sabes si realmente tus conexiones son seguras?
          <br />
          
        </Box>
      </Box>
      <Box marginBottom={{ xs: 2, sm: 4 }}>
        <Box
          component={Typography}
          variant="h6"
          data-aos={isMd ? 'fade-right' : 'fade-up'}
        >
          Fortinet se ha ganado una reputación por su enfoque en la innovación y
          la investigación en ciberseguridad, y su compromiso con la protección
          de redes y datos contra amenazas cada vez más sofisticadas.
          <br />
        </Box>
      </Box>
    </Box>
  );

  const GridItemReviewBlock = () => {
    const sliderOpts = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <Box maxWidth={'100%'} data-aos={isMd ? 'fade-left' : 'fade-up'}>
        <Slider {...sliderOpts}>
          {[
            {
              feedback:
                'Empresa de medios de comunicación mantiene su capa de seguridad perimetral con equipos Fortinet, evitando así ataques y amenzas a su infraestructura.',
              image: 'https://assets.maccarianagency.com/avatars/img1.jpg',
              name: 'Clara Bertoletti',
              title: 'Material-UI lover',
            },
          ].map((item, i) => (
            <Box padding={{ xs: 0, sm: 1, md: 2 }} key={i}>
              <Box
                component={Card}
                boxShadow={0}
                border={`1px solid ${theme.palette.divider}`}
              >
                <CardContent>
                  <Box marginBottom={1}>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Box
                        key={item}
                        color={theme.palette.secondary.main}
                        display={'inline'}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={24}
                          height={24}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    fontWeight={400}
                    marginBottom={2}
                  >
                    {item.feedback}
                  </Box>
                  <Box width={1}></Box>
                </CardContent>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    );
  };

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemReviewBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reviews;
