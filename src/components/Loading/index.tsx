import React from 'react';
import { LoadingDiv } from './style';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
  return (
    <LoadingDiv>
      <AiOutlineLoading3Quarters size={42}></AiOutlineLoading3Quarters>
    </LoadingDiv>
  );
};

export default Loader;
