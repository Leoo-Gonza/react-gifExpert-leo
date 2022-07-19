import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue] = useState('');

    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }

    const onSubmit = ( event )=>{
        event.preventDefault();
        if( inputValue.trim().lenght<=1) return;
        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

  return (

    <form onSubmit={ onSubmit }>
        <input
        type="text"
        placeholder="buscar Gifs"
        value={ inputValue }
        onChange={ onInputChange }
        />
    </form>

  )
}

