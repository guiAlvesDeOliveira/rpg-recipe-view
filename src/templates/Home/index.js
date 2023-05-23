import {Recipe} from "../../components/Recipe";
import {loadRecipes} from "../../utils/load-recipes";
import {useCallback, useEffect, useState} from "react";

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    const handleLoadRecipes = useCallback(async () => {
        try {
            const recipesResponse = await loadRecipes();
            setRecipes(recipesResponse);
        } catch (error) {
            console.error("Error loading recipes:", error);
        }
    }, []);

    useEffect(() => {
        handleLoadRecipes();
    }, [handleLoadRecipes]);

    return (
        <div className='flex flex-wrap'>
            {recipes.map((recipe) => (
                <div className='w-1/3'>
                    <Recipe recipe={recipe}/>
                </div>
            ))}
        </div>
    );
};

export default Home;
