import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');


  const onInputChange = ({ target }) => {
    setInputValue(target.value);
}

const onSubmit = (event) => {

    event.preventDefaults()
    if (inputValue.trim().length <= 1) return
    
    //setCategories( categories => [inputValue, ...categories])
    setInputValue('')
    onNewCategory(inputValue.trim())
    

}


  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar GIFs"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  );
};
