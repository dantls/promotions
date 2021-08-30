import React,{useEffect, useState} from 'react';
import axios from 'axios'

import PromotionList from 'components/Promotion/List/List'

import {
  Header,
  Title,
  Button,
  Search
} from './styles';


export default function PromotionSearch(){
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {}
    if(search){
      params.title_like = search
    }

    axios.get('http://localhost:3333/promotions?_embed=comments&_order=desc&_sort=id', {params})
    .then((response) => {
      setPromotions(response.data)
    })
  },[search])
 
  return(
    <>
      <Header>
        <Title>Promo Show</Title>
        <Button
          to="/create"
        >
          Nova Promoção
        </Button>
      </Header>

      <Search 
        type="search"
        placeholder="Buscar"
        value={search}
        onChange={(event) => {setSearch(event.target.value)}}
      />

      <PromotionList 
        promotions={promotions}
        loading={!(promotions.length)}      
      />
    </>
  )
}