import React from 'react';
import {Col, Card, Button } from 'react-bootstrap';
import { useDrinks } from '../hooks/useDrinks';

export const Drink = ({drink}) => {

    const {handleModalClick, handleDrinkIdClick} = useDrinks();

  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img
                variant='top'
                src={drink.strDrinkThumb}
                alt={`Imagen de ${drink.strDrink}`}
            ></Card.Img>
            <Card.Body>
                <Card.Title>{drink.strDrink}</Card.Title>
                <Button
                    variant='info'
                    className="w-100 text-uppercase mt-2"
                    onClick={()=>{
                        handleModalClick(),
                        handleDrinkIdClick(drink.idDrink)
                    }}
                >See recipe</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}
