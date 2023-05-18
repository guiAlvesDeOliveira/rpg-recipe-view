import './style.css'

export const RecipeCard = () => (
    <div className='recipe'>
        <div className='title'>
            <h3>Nome da Receita</h3>
        </div>
        <div className='ingredients'>
            <li>Ingrediente</li>
            <li>Ingrediente</li>
            <li>Ingrediente</li>
        </div>
        <div className='fail-success'>
            <div className='fail'>
                <p>Grande Falha</p>
                <p>Pequena Falha</p>
                <p>Falha Critica</p>
            </div>
            <div className='success'>
                <p>Sucesso</p>
                <p>Critico</p>
            </div>
        </div>
        <div className='infos'>
            <p>Teste</p>
            <p>Servem</p>
        </div>
    </div>
)


/*
const recipeSchema = new mongoose.Schema({
   name: String,
   ingredients: [String],
   savingThrow: Number,
   fail: String,
   bigFail: String,
   criticalFail: String,
   success: String,
   critical: String,
   serves: String
});
 */