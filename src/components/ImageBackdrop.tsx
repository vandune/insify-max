import * as React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

const ImageBackdrop: React.FC<Props> = ({ src }) => {
  return (
    <Backdrop>
      <Img src={src} alt=""/>
    </Backdrop>
  )
}

export default ImageBackdrop;

const Backdrop = styled.div`
  grid-column: 1 / 4;
  grid-row-start: 2;
  overflow: hidden;
  width: 100%;
  height: 100%;

  @media(min-width: 1120px) {
    grid-column: 3 / 5;
    grid-row-start: 1;
  }
`

const Img = styled.img`
  object-fit: cover;
  width: calc(100% + 160px);
  height: calc(100% + 160px);
  margin: -80px;
  filter: blur(80px);
`