import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SkeletonC from '../../../../../svg/components/SkeletonC';
import LazyLoadinComponent from '../../../../../svg/components/LazyLoadingComponent';

const Partners = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
      {[
        //'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Mercado-Libre-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/mlib2.png',

        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Alsea-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Nokia-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Citibanamex-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Mabe-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Siemens-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-BBVA-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Santander-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Gavilan-2022.png',
        //   'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-VSL-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Televisa-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Banco-Mexico-2022.png',
        //   'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Bolsa-Mexicana-2022.png',
        // 'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-CMP-2022.png',
        //   'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Minsa-2022.png',
        //   'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-ISSSTE-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Altor-2022.png',
        //   'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Paga-Todo-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Justo-Sierra-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Profuturo-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Maxcom-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Timken-2022.png',
        // 'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-IEEM-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Kio-Networks-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Sistemas-Te-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Banco-Azteca-2022.png',
        //   'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-American-SF-2022.png',
        'https://d117ffkp1c6hyc.cloudfront.net/images/Logo-Banorte-2022.png',
      ].map((item, i) => (
        <Box
          maxWidth={110}
          marginTop={{ xs: 1 }}
          marginRight={{ xs: 3, sm: 6, md: 12 }}
          key={i}
        >
          <Box
            sx={{
              filter: 'contrast(0)',
            }}
          >
            {loading ? (
              <SkeletonC heightFrom={100} />
            ) : (
              <LazyLoadinComponent
                width={'86%'}
                height={'70%'}
                src={item}
                title={'...'}
              />
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Partners;
