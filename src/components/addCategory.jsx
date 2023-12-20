import { useState } from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ( {
  onNewCategory,
} ) => {

  const [inputValue, setinputValue] = useState('')

  const onInputChange = ( { target } ) => {
    setinputValue(target.value);
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    
    onNewCategory( inputValue.trim() );
    setinputValue('');
  }

  return (
    <form action="" onSubmit={ onSubmit }>
      <input 
      type="text"
      placeholder="Buscar gifts"
      value={inputValue}
      onChange={ onInputChange }
     />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}