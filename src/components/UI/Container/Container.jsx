import React from 'react';

import { Container } from './styles';

export default function UIContainer({children}){
  return(
    <Container>
      {children}
    </Container>
  )
}