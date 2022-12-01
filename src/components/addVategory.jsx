import { useState } from "react"


export const AddCategory = ({onSentCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange =(event)=>{
        setinputValue(event.target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        
        console.log(inputValue.trim());
         
        onSentCategory(inputValue.trim());
        setinputValue('');
       
    }

  return (
    <form onSubmit={onSubmit}>
        
    <input type="text" 
    placeholder="Buscar gifs"
    value =  { inputValue }
    onChange={(event)=> onInputChange(event)}
    />
    </form>
  )
}
