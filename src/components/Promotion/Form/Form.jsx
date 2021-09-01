import React, { useState , useEffect } from 'react';
import Input from './Input/Input';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useApi from 'hooks/useApi';

import {
  Container,
  Title,
  Subtitle,
  Form,
  Button
} from './styles';

const initialValue = {
  title:'',
  url:'',
  imageUrl:'',
  price: 0,
}

export default function PromotionForm({id}){
  const [values, setValues] = useState(id ? null : initialValue);
  const history = useHistory();
  
  const [load , loadInfo] = useApi({
    url:`/promotions/${id}`,
    method: 'get',
    onCompleted: (response) => {
      setValues(response.data)
    }
  });
  const [save , saveInfo] = useApi({
    url: id ? `/promotions/${id}`: `/promotions/`,
    method: id ? 'put' : 'post',
    onCompleted: (response) => {
      if(!response.error){
        history.push('/')
      }
    }
  });

  useEffect(()=>{
    if(id){
      load()
    }
  },[id])


  function onChange(event) {
    const {name, value} = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }
  function onSubmit(event) {
    event.preventDefault();
    save({
      data: values
    });    
  }

  return (
    <Container>
      <Title>Promo Show</Title>
      <Subtitle>Nova Promoção</Subtitle>

      {!values ? ( <div>Carregando...</div>) : (
        <Form onSubmit={onSubmit}>
        {saveInfo.loading && <span>Salvando dados...</span>}
        <Input
          title="Título"
          name="title"
          type="text"   
          value={values.title}
          onChange={onChange}     
        />
        <Input
          title="Link"
          name="url"  
          value={values.url}
          onChange={onChange}      
        />
          <Input
          title="Imagem (URL)"
          name="imageUrl"  
          value={values.imageUrl}
          onChange={onChange}      
        />
        <Input
          title="Preço"
          name="price"      
          value={values.price}
          onChange={onChange}  
        />
        <Button
          type="submit"
        >
          Salvar
        </Button>       
        </Form>
      )}
    </Container>
  )
}