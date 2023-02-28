import React from 'react';
import { Spinner } from 'reactstrap';

export const Loader = () => {
  return <Spinner animation="border" variant="dark" />;
};

export const AppLoader = () => {
  return (
    <div className="page-loader">
      <Spinner
        style={{ width: '3rem', height: '3rem' }}
        className="loader-pos-center"
        animation="border"
        variant="dark"
      />
    </div>
  );
};
