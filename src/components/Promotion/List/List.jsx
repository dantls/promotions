import React, {useState} from 'react';
import PromotionCard from 'components/Promotion/Card/Card'
import PromotionModal from 'components/Promotion/Modal/Modal'

export default function PromotionList({loading,error,promotions}){

  const [promotionId, setPromotionId] = useState(null)

  if(promotions === null){
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
      {loading &&  <div>
        Carregando mais promoções..
      </div>}
      {promotionId && (
       <PromotionModal 
         promotionId={promotionId}
         onClickClose = {()=> setPromotionId(null)}
       />
      )}
       
    </>
  )
}