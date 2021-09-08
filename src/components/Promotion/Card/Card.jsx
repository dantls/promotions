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
  CardLink,
  CardLinkEdit
} from './styles';

import CommentCard from '../Comment/Comment';

export default function PromotionCard({promotion, onClickComments}){

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
          <CardCommentsCount
            onClick={onClickComments}
          >
            {comments.length}{' '}
            {comments.length > 1 
              ? 'Comentários'
              : 'Comentário'}
          </CardCommentsCount>
          <CardDescription>{description}</CardDescription>
          <CardLink href={url} target="_blank" without rel="noreferrer">Ir para o Site</CardLink>
          <CardLinkEdit to={`/edit/${promotion.id}`}>Editar</CardLinkEdit>    
        </CardFooter>
      </CardInfo>
    </Container>
  )
}