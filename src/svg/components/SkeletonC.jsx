import React from 'react';
import { Card, Skeleton } from '@mui/material';
export default function SkeletonC({ heightFrom }) {
  return (
    <Card>
      <Skeleton variant="rectangular" height={heightFrom} />
    </Card>
  );
};
