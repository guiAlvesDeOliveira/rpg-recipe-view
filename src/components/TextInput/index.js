import './style.css'
import P from 'prop-types';

export const TextInput = ({searchValue, handleChange}) => {
    return (
        <input className='text-input w-full border-2 mt-5'
               onChange={handleChange}
               value={searchValue}
               type="search"
               placeholder='Digite sua pesquisa'
        />
    )
}

TextInput.propTypes = {
    handleChange: P.func.isRequired
}