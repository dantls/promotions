import React from 'react';
import {GlobalStyles} from 'styles/GlobalStyles'
import PromotionSearch from 'components/Promotion/Search/Search'
import UIContainer from 'components/UI/Container/Container'


export default function PagesPromotionSearch(){

  return(
    <UIContainer>
      <PromotionSearch />
      <GlobalStyles />
    </UIContainer>
  )
}