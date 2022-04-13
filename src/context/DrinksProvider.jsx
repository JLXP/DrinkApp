import React,{useState,useEffect,createContext} from 'react';
import axios from 'axios';


const DrinksContext = createContext();

const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
   
    const getDrink = async(e) => {

        try {
            const url= `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.name}&c=${e.category}`;
            
            const {data} = await axios(url);
            setDrinks(data.drinks);

        } catch (error) {
            
        }
    }

    const handleModalClick = () => {
        setModal(!modal);
    }
  
    return (
        <DrinksContext.Provider
            value={{
                getDrink,
                drinks,
                handleModalClick
            }}
        >
            {children}
        </DrinksContext.Provider>
    )
}

export {
    DrinksProvider,
    DrinksContext
}
