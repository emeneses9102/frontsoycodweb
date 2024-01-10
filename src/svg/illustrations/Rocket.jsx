import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SkeletonC from '../components/SkeletonC';
import LazyLoadinComponent from '../components/LazyLoadingComponent';

const Rocket = ({ width = 329, height = 273 }) => {
  const [loading, setLoading] = useState(true);
  const bgImage = 'https://d117ffkp1c6hyc.cloudfront.net/images/index-1.png';
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonC heightFrom={500} />
      ) : (
        <LazyLoadinComponent
          width={width}
          height={height}
          src={bgImage}
          title={
            'Somos un integrador de soluciones tecnológicas con más de 29 años de experiencia'
          }
        />
      )}
    </>
  );
};

Rocket.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Rocket;
