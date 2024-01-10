import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function LazyLoadingComponent({ width, height, src, title }) {
    const dummmyEffect="https://d117ffkp1c6hyc.cloudfront.net/images/dummy_500x500_effect.png";
  return (
    <LazyLoadImage
      src={src}
      title={title}
      alt={title}
      effect="blur"
      width={width}
      placeholderSrc={dummmyEffect}
      height={height}
    />
  );
}
