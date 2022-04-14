import React,{useState,useEffect,createContext} from 'react';
import axios from 'axios';


const DrinksContext = createContext();

const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
    const [drinkId, setDrinkId] = useState(null);
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(false);
   
    const getRecipe = async () => {
        if(!drinkId) return

        try {
            const url= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
            const  {data} = await axios(url);
            setRecipe(data.drinks[0]);
            
        }catch(error) {
            console.log(error);
        }finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        setLoading(true);
        getRecipe();
    }, [drinkId])
    
    
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

    const handleDrinkIdClick = (id) => {
        setDrinkId(id);
        console.log(id);
    }
  
    return (
        <DrinksContext.Provider
            value={{
                getDrink,
                drinks,
                handleModalClick,
                modal,
                handleDrinkIdClick,
                recipe,
                setRecipe,
                loading
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
