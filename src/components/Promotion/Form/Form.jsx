import React, { useState } from 'react';
import Input from './Input/Input';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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

export default function PromotionForm(){
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(event) {
    const {name, value} = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }
  function onSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:3333/promotions', values)
    .then((response) => {
      history.push('/')
    })
  }



  return (
    <Container>
      <Title>Promo Show</Title>
      <Subtitle>Nova Promoção</Subtitle>

      <Form onSubmit={onSubmit}>
        <Input
          title="Título"
          name="title"
          type="text"   
          onChange={onChange}     
        />
        <Input
          title="Link"
          name="url"  
          onChange={onChange}      
        />
         <Input
          title="Imagem (URL)"
          name="imageUrl"  
          onChange={onChange}      
        />
        <Input
          title="Preço"
          name="price"      
          onChange={onChange}  
        />
        <Button
          type="submit"
        >
          Salvar
        </Button>       
      </Form>
    </Container>
  )
}