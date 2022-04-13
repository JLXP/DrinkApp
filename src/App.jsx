import React from 'react';
import {Container} from 'react-bootstrap';
import { Formulario } from './components/Formulario';
import { ListDrinks } from './components/ListDrinks';
import { ModalDrink } from './components/ModalDrink';
import { CategoriesProvider } from './context/CategoriesProvider';
import { DrinksProvider } from './context/DrinksProvider';


export const App = () => {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Look for Drinks</h1>
        </header>
        <Container className="mt-5">
          <Formulario/>
          <ListDrinks/>
          <ModalDrink/>
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  )
}
