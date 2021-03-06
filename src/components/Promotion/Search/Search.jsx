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

const baseParams ={
  _embed: 'comments',
  _order:'desc',
  _sort:'id',
  _limit:2,
}

export default function PromotionSearch(){
  const mountRef = useRef(null)
  const [page,setPage] = useState(1)
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    debounceDelay: 300,
    url:'/promotions',
    method: 'get',
  
  });

  useEffect(() => {
  
    load({
      debounced: mountRef.current,
      params: {
        ...baseParams,
        _page:1,
        title_like: search || undefined
      },
  
    });

    if(!mountRef.current){
      mountRef.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])
 


  function fetchMore() {
    const newPage = page + 1;
    load({
      isFetchMore: true,
      params: {
        ...baseParams,
        _page:newPage,
        title_like: search || undefined
      },
      updateRequestInfo: (newRequestInfo, prevRequestInfo)=> ({
        ...newRequestInfo,
        data: [
          ...prevRequestInfo.data,
          ...newRequestInfo.data,
        ]
      })
    });

    setPage(newPage)
  }

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
      && !loadInfo.loading
      && loadInfo.data?.length < loadInfo.total
      &&(
      <UIInfiniteScroll
        fetchMore={fetchMore}
      />
      )}
    </>
  )
}