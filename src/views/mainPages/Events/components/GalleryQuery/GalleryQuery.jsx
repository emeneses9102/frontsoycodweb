import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import LoadingSpinner from '../../../../../common/components/UIElements/LoadingSpinnerSmall';
const baseUrlAWS = 'https://d117ffkp1c6hyc.cloudfront.net/images/';


const GalleryQuery = ({ objectPictures, titlePicture }) => {
  const [photos, setPhotos] = useState(null);
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setPhotos(objectPictures);
    }
  }, []);

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
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
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
    slidesToShow = 2;
  }
  if (isLg) {
    slidesToShow = 2;
  }
  if (isXl) {
    slidesToShow = 2;
  }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        {photos != null ? (
          photos.map((item, i) => (
            <Box key={i} paddingX={2}>
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                borderRadius={3}
                sx={{
                  cursor: 'pointer',
                }}
              >
                <CardMedia
                  image={baseUrlAWS + item}
                  title={titlePicture}
                  sx={{
                    height: 340,
                  }}
                />
              </Box>
            </Box>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </Slider>
    </Box>
  );
};
export default GalleryQuery;
