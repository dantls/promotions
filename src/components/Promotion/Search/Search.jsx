import React,{useEffect, useState} from 'react';

import useApi from 'hooks/useApi';

import PromotionList from 'components/Promotion/List/List'

import {
  Header,
  Title,
  Button,
  Search
} from './styles';

export default function PromotionSearch(){
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    url:'/promotions',
    method: 'get',
    params: {
      _embed: 'comments',
      _order:'desc',
      _sort:'id',
      title_like: search || undefined
    },

  });

  useEffect(() => {
    load();
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
    </>
  )
}