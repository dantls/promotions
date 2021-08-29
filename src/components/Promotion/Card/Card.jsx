import React from 'react';
import {
  Container,
  CardInfo,
  CardTitle,
  CardImage,
  CardPrice,
  CardFooter,
  CardDescription,
  CardCommentsCount,
  CardLink
} from './styles';

import CommentCard from '../Comment/Comment';

export default function PromotionCard({promotion}){
  const {
    title,
    price,
    imageUrl,
    description,
    url,
    comments
  } = promotion;

  return (
    <Container>
      <CardImage 
        src={imageUrl}
        alt={title}
      />
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardPrice>R$ {price}</CardPrice>

        <CardFooter>
          {comments.length > 0 && (
            <CommentCard comment={comments[0].comment} />
          )}
          <CardCommentsCount>
            {comments.length}{' '}
            {comments.length > 1 
              ? 'Comentários'
              : 'Comentário'}
          </CardCommentsCount>
          <CardDescription>{description}</CardDescription>
          <CardLink href={url} target="_blank" without rel="noreferrer">IR PARA O SITE</CardLink>
        </CardFooter>
      </CardInfo>
    </Container>
  )
}