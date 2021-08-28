import React from 'react';
import {
  Container,
} from './styles';


export default function CommentCard({comment}){
  return (
    <Container>
      "{comment}"
    </Container>
  )
}