import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card'

export default function PromotionList({loading,error,promotions}){

  if(loading || promotions === null){
    return ( 
      <div>
        Loading...
      </div>
    )
  }
  if(error){
    return ( 
      <div>
        Erro...
      </div>
    )
  }
  if(promotions.length === 0 ){
    return ( 
      <div>
        Nenhum resultado encontrado...
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