import React from 'react';
import { LoadingDiv } from './style';
import loading from '../../assets/img/loading.png';

const Loader = () => {
  return (
    <LoadingDiv>
      <img src={loading} alt='' />
    </LoadingDiv>
  );
};

export default Loader;
