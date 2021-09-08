import React, {useState} from 'react';
import PromotionCard from 'components/Promotion/Card/Card'
import UIModal from 'components/UI/Modal/Modal'

export default function PromotionList({loading,error,promotions}){

  const [promotionId, setPromotionId] = useState(null)

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
          onClickComments={() => setPromotionId(promotion.id)}
          key={promotion.title}
          promotion={promotion}
        />
        ))
      }
      <UIModal 
        isOpen={Boolean(promotionId)}
        onClickClose={() => setPromotionId(null)}
      >
        <h1>Comentários</h1>
      </UIModal>
    </>
  )
}