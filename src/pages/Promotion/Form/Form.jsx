import React from 'react';
import {useParams} from 'react-router-dom';

export default function Form(){
  const {id} = useParams();
  return(
    <div>Form id: {id}</div>
  )
}