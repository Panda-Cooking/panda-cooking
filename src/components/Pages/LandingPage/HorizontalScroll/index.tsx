import HorizontalScroll from 'react-scroll-horizontal';
import { HorizontalScrollContainer } from './styles';

interface iPropsHorizontalScroll {
  children: React.ReactNode;
  height: number;
}

export const HorizontalScrolll = ({
  children,
  height,
}: iPropsHorizontalScroll) => {
  return (
    <HorizontalScrollContainer height={height}>
      <HorizontalScroll pageLock={true} reverseScroll={true}>
        {children}
      </HorizontalScroll>
    </HorizontalScrollContainer>
  );
};
