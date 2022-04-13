import React,{useState} from 'react';
import {Button, Form, Row, Col, Alert} from 'react-bootstrap';
import {useCategories} from '../hooks/useCategories';
import { useDrinks } from '../hooks/useDrinks';

export const Formulario = () => {

  const [search, setSearch] = useState({
    name:'',
    category:''
  });

  const [alert, setAlert] = useState('');
  const {categories} = useCategories();
  const {getDrink}  = useDrinks();

  const handleSubmit = (e) => {
     e.preventDefault();

     if(Object.values(search).includes('')){
          setAlert('Todos los campos son obligatorios');
          return;
     }

     setAlert('');
     getDrink(search);
  }

  return (
    <Form onSubmit={handleSubmit}>

      {alert && <Alert variant='danger' className='text-center'>{alert}</Alert>}
        <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor='name'>Drink name</Form.Label>
                <Form.Control
                  id='name'
                  type="text"
                  placeholder="Example: Tequila, Vodka, etc"
                  name="name"
                  value={search.name}
                  onChange={e => setSearch({
                    ...search,
                    [e.target.name]: e.target.value
                  })}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor='name'>Drink Category</Form.Label>
                <Form.Select
                  id="category"
                  name="category"
                  value={search.category}
                  onChange={e => setSearch({
                    ...search,
                    [e.target.name]: e.target.value
                  })}
                >
                  <option>- Select Category-</option>
                  {categories.map(categoria => (
                    <option
                      key={categoria.strCategory}
                      value={categoria.strCategory}
                    >{categoria.strCategory}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
        </Row>
        <Row className="justify-content-end">
          <Col md={3}>
            <Button
              variant='danger'
              className='text-uppercase w-100'
              type="submit"
            >
              Look for Drinks
            </Button>
          </Col>
        </Row>
    </Form>
  )
}
