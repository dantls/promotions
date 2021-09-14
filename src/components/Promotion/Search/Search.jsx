import React,{useEffect, useState, useRef} from 'react';

import useApi from 'hooks/useApi';

import PromotionList from 'components/Promotion/List/List'

import UIInfiniteScroll from 'components/UI/InfiniteScroll/InfiniteScroll';

import {
  Header,
  Title,
  Button,
  Search
} from './styles';

export default function PromotionSearch(){
  const mountRef = useRef(null)
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    debounceDelay: 300,
    url:'/promotions',
    method: 'get',
    params: {
      _embed: 'comments',
      _order:'desc',
      _sort:'id',
      _limit:4,
      _page:1,
      title_like: search || undefined
    },

  });

  useEffect(() => {
  
    load({
      debounced: mountRef.current
    });

    if(!mountRef.current){
      mountRef.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        promotions={loadInfo.data}
        loading={loadInfo.loading}
        error={loadInfo.error}      
      />
      {loadInfo.data
      &&(
      <UIInfiniteScroll
        fetchMore={() => console.log('Apareceu')}
      />
      )}
    </>
  )
}