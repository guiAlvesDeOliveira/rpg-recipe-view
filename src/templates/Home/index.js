import {Recipe} from "../../components/Recipe";
import {TextInput} from "../../components/TextInput";
import {loadRecipes} from "../../utils/load-recipes";
import {useCallback, useEffect, useState} from "react";

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const filteredRecipes = !!searchValue
        ? recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(searchValue.toLowerCase())
        })
        : recipes;

    const handleLoadRecipes = useCallback(async () => {
        try {
            const recipesResponse = await loadRecipes();
            setRecipes(recipesResponse);
        } catch (error) {
            console.error("Error loading recipes:", error);
        }
    }, []);

    const handleChange = (e) => {
        const {value} = e.target;
        setSearchValue(value);
    }

    useEffect(() => {
        handleLoadRecipes();
    }, [handleLoadRecipes]);

    return (
        <section className='container'>
            <div className='search-recipes px-40'>
                <TextInput className='w-max'
                           searchValue={searchValue}
                           handleChange={handleChange}
                ></TextInput>
            </div>
            <div className='flex flex-wrap px-40'>
                {filteredRecipes.length > 0 && (
                    <Recipe key={filteredRecipes.id} recipe={filteredRecipes}/>
                )}
                {filteredRecipes.length === 0 && (
                    <p>Não Existem Posts</p>
                )}
            </div>

        </section>
    );
};

export default Home;
