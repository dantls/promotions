import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card'

export default function PromotionList({loading, promotions}){

  if(loading){
    return ( 
      <div>
        Loading...
      </div>
    )
  }

  return(
    <>
      {promotions.map(promotion=> (
        <PromotionCard 
          key={promotion.title}
          promotion={promotion}
        />
        ))
      }
    </>
  )
}