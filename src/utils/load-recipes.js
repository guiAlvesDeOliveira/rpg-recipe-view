export const loadRecipes = async() => {
    const recipeResponse = await fetch('http://localhost:3000/recipes');
    const recipesJson = await recipeResponse.json();

    return recipesJson;
}