import React, { useState , useEffect } from 'react';
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

export default function PromotionForm({id}){
  const [values, setValues] = useState(id ? null : initialValue);
  const history = useHistory();

  useEffect(()=>{
    if(id){
      axios.get(`http://localhost:3333/promotions/${id}`)
      .then((response) => {
        setValues(response.data);
      })
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

    const method = id ? 'put' : 'post';

    const url = id 
    ? `http://localhost:3333/promotions/${id}`
    : `http://localhost:3333/promotions/`

    axios[method](url, values)
    .then((response) => {
      history.push('/')
    })
  }

  return (
    <Container>
      <Title>Promo Show</Title>
      <Subtitle>Nova Promoção</Subtitle>

      {!values ? ( <div>Carregando...</div>) : (
        <Form onSubmit={onSubmit}>
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