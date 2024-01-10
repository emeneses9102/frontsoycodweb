import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Gallery = () => {
  const theme = useTheme();
  const iconSycod = `https://d117ffkp1c6hyc.cloudfront.net/images/${
    theme.palette.mode === 'light' ? 'logo-sycod-gris' : 'logo-sycod-blanco'
  }.png`;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photosSCD = [
    {
      src: iconSycod,
      rows: 1,
      cols: 4,
    },
  ];
  const photos = [
    {
      src: 'https://d117ffkp1c6hyc.cloudfront.net/images/SYCOD-team-2.jpg',
      rows: 2,
      cols: 1,
    },
    {
      src: 'https://d117ffkp1c6hyc.cloudfront.net/images/SYCOD-team-1.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://d117ffkp1c6hyc.cloudfront.net/images/SYCOD-team-4.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://d117ffkp1c6hyc.cloudfront.net/images/SYCOD-team-6.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://d117ffkp1c6hyc.cloudfront.net/images/SYCOD-team-3.jpg',
      rows: 1,
      cols: 2,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);
  const photosToShowOne = isMd
    ? photosSCD
    : photosSCD.slice(0, photosSCD.length - 1);

  return (
    <Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={isMd ? 70 : 110}
          gap={isMd ? 16 : 8}
        >
          {photosToShowOne.map((item, i) => (
            <ImageListItem
              key={i}
              cols={isMd ? item.cols || 1 : 2}
              rows={isMd ? item.rows || 1 : 1}
            >
              <img
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                loading="lazy"
                style={{
                  objectFit: 'contain',
                  cursor: 'poiner',
                  borderRadius: 4,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photosToShow.map((item, i) => (
            <ImageListItem
              key={i}
              cols={isMd ? item.cols || 1 : 2}
              rows={isMd ? item.rows || 1 : 1}
            >
              <img
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                loading="lazy"
                style={{
                  objectFit: 'cover',
                  cursor: 'poiner',
                  borderRadius: 4,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Gallery;
