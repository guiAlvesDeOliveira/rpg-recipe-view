import './style.css'
import {RecipeCard} from "../RecipeCard";


export const Recipe = ({recipe}) => (
    <div className='recipes p-5 m-2 rounded-sm border-2'>
        <RecipeCard recipe={recipe}/>
    </div>
)