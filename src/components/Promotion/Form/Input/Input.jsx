import React from 'react';

import {
  Container,
  Label,
  Input
} from './styles';

export default function PromotionFormInput({name,title,...rest}){
  return (
    <Container>
      <Label htmlFor={name}>{title}</Label>
      <Input id={name} name={name}{...rest}/>
    </Container>
  )
}