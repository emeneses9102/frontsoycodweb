import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'react-share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Divider } from '@mui/material';

const News = () => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isxS = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const definitiveHeight = isXl
    ? '600'
    : isLg
    ? '500'
    : isMd
    ? '350'
    : isSm
    ? '300'
    : isxS
    ? '250'
    : '550';
  const definitiveWidth = isXl
    ? '600'
    : isLg
    ? '500'
    : isMd
    ? '350'
    : isSm
    ? '300'
    : isxS
    ? '250'
    : '550';

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Noticias
        </Typography>
        <Typography
          component={'h2'}
          fontWeight={700}
          variant={'h2'}
          align={'center'}
          gutterBottom
        >
          Lea nuestras últimas noticias
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Hemos ayudado a grandes, medianas y pequeñas empresas a mejorar su
          marca, diseñar soluciones y comercializar nuevas ideas.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Siempre al tanto de los últimos avances de la tecnología🚀',
            subtitle: 'Sycod presente en #HPEDiscover2023 en las vegas',
            media: 'https://d117ffkp1c6hyc.cloudfront.net/images/%F0%9D%90%80%F0%9D%90%93%F0%9D%90%8C%F0%9D%90%8E%F0%9D%90%92%F0%9D%90%8F%F0%9D%90%87%F0%9D%90%84%F0%9D%90%91%F0%9D%90%84+%F0%9D%9F%90%F0%9D%9F%8E%F0%9D%9F%90%F0%9D%9F%91LAS+VEGAS4.jpeg',
            hashtag: '#HPEGreenLake #IT #HPE Hewlett Packard Enterprise',
          },
          {
            title:
              '𝐀𝐠𝐫𝐚𝐝𝐞𝐜𝐢𝐝𝐨𝐬 𝐝𝐞 𝐩𝐨𝐝𝐞𝐫 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐫 𝐮𝐧 𝐚ñ𝐨 𝐦á𝐬 𝐞𝐧 𝐀𝐓𝐌𝐎𝐒𝐏𝐇𝐄𝐑𝐄 𝟐𝟎𝟐𝟑🥳VEGAS NEVADA',
            subtitle:
              'Preparándonos para un futuro con los conocimientos de IA de HPE Aruba Networking,la seguridad integrada, los servicios de red basados en la nube, las iniciativas de sostenibilidad y los modelos de implementación como servicio.',
            media: 'https://d117ffkp1c6hyc.cloudfront.net/images/atmosphere2023lasvegas.jpeg',
            hashtag:
              '#networking #LasVegas #Atmosphere #HPEAruba #ATM23 #IA #red #nube',
          },
          {
            title:
              'Reconocimiento  SYCOD  durante Cradlepoint Americas Partner Summit 2023 en Austin, Tx. #nolimitswithcradlepoint',
            subtitle:
              '¡Sin limites! Estamos muy orgullosos de obtener este premio como partner of the year en el #americaspartnersummit2023 y estamos agradecidos con Cradlepoint México y su maravilloso equipo por el apoyo y el compromiso que han mostrado siempre para con nosotros. Gracias también a Roberto Said Ledesma Garcia y su equipo de ingenieros por hacer posible todo lo imposible en los proyectos de nuestros clientes ¡Vamos por más! #sycodwinner #partneroftheyear #cradlepoint #networking #makeitpossible',
            media: 'https://d117ffkp1c6hyc.cloudfront.net/images/2Reconocimiento-americaspartnersummit2023.jpeg',
            hashtag: '#Base de datos',
          },
          {
            title: '¡Hoy cumplimos 29 años!',
            subtitle:
              'Hoy cumplimos 29 años y estamos felices de poder compartirlo con nuestros clientes, fabricantes y amigos. Ha sido un camino largo pero lleno de satisfacciones y retos que nos han permitido estar aquí. Gracias a todos nuestros colaboradores, por su entusiasmo y entrega, a nuestros partners por su confianza y a ambos por no perder el objetivo principal que es la confianza y el éxito en los proyectos de nuestros clientes. ¡Enhorabuena! 🥳🎉',
            media: 'https://d117ffkp1c6hyc.cloudfront.net/images/29-años-sycod-28-febrero-2023.jpeg',
            hashtag: '#29AñosEnLaIndustria',
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={6} key={i}>
            <Box
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
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
                borderRadius={3}
                flexDirection={'column'}
                display={'flex'}
              >
                <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 140,
                  }}
                />
                <Box component={CardContent}>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'left'}
                  >
                    {item.title}
                  </Box>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'flex-end'}>
                  <FacebookShareButton
                    url={item.media}
                    subject={item.title}
                    body={item.subtitle}
                    quote={item.title}
                    hashtag={item.hashtag}
                    windowHeight={definitiveHeight}
                    windowWidth={definitiveWidth}
                  >
                    <FacebookIcon color="primary" />
                  </FacebookShareButton>

                  <TwitterShareButton
                    title={item.title}
                    via={item.subtitle}
                    hashtag={item.hashtag}
                    url={item.media}
                    windowHeight={definitiveHeight}
                    windowWidth={definitiveWidth}
                  >
                    <TwitterIcon color="primary" />
                  </TwitterShareButton>

                  <LinkedinShareButton
                    url={item.media}
                    title={item.title}
                    summary={item.subtitle}
                    windowHeight={definitiveHeight}
                    windowWidth={definitiveWidth}
                  >
                    <LinkedInIcon color="primary" />
                  </LinkedinShareButton>

                  <TelegramShareButton
                    url={item.media}
                    title={item.title}
                    windowHeight={definitiveHeight}
                    windowWidth={definitiveWidth}
                  >
                    <TelegramIcon color="primary" />
                  </TelegramShareButton>

                  <WhatsappShareButton
                    url={item.media}
                    title={item.title}
                    separator={item.subtitle}
                    windowHeight={definitiveHeight}
                    windowWidth={definitiveWidth}
                  >
                    <WhatsAppIcon color="primary" />
                  </WhatsappShareButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item container xs={12} justifyContent={'center'}></Grid>
      </Grid>
    </Box>
  );
};

export default News;
