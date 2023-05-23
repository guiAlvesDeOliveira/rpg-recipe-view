import './style.css';

export const RecipeCard = ({ recipe }) => {
    const ingredients = recipe.ingredients;

    return (
        <div className='recipe' key={recipe.id}>
            <div className='title text-center'>
                <h3 className='font-bold text-xl'>{recipe.name}</h3>
            </div>
            <div className='ingredients px-4'>
                {ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
            </div>
            <div className='fail-success'>
                <div className='fail'>
                    <p><b>Falha: </b>{recipe.fail}</p>
                    <p><b>Falha Grande: </b>{recipe.bigFail}</p>
                    <p><b>Falha Critica: </b>{recipe.criticalFail}</p>
                </div>
                <div className='success'>
                    <p><b>Acerto: </b>{recipe.success}</p>
                    <p><b>Acerto Critico: </b>{recipe.critical}</p>
                </div>
            </div>
            <div className='infos'>
                <p><b>Dificuldade: </b>{recipe.savingThrow}</p>
                <p><b>Servem: </b>{recipe.serves}</p>
            </div>
        </div>
    );
};
