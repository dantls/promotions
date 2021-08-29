import React, {useEffect, useState} from 'react';
import PromotionCard from 'components/Promotion/Card/Card'
import {GlobalStyles} from 'styles/GlobalStyles'
import axios from 'axios'

export default function PagesPromotionSearch(){

  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/promotions?_embed=comments')
    .then((response) => {
      setPromotions(response.data)
    })
  },[])
 
  return(
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: '30px auto'
      }}
    >
      {
        (!(promotions.length > 0)) && (
          <div>
            Loading...
          </div>
        )
      }

      {
        promotions.map(promotion=> (
          <PromotionCard 
            promotion={promotion}
          />
        ))
      }

      <GlobalStyles />
    </div>
  )
}