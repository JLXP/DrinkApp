import React from 'react';
import {Row} from 'react-bootstrap';
import {useDrinks} from '../hooks/useDrinks';
import { Drink } from './Drink';


export const ListDrinks = () => {

    const {drinks} = useDrinks();

  return (
    <Row>
    {drinks.map(drink=>(
        <Drink
                key={drink.idDrink}
                drink={drink}
        
        />
    ))}

    </Row>
  )
}
