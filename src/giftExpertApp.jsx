import { useState } from "react";
import { AddCategory, GifGrid } from "./components";




export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategory = (valueIncoming ) => {
    //categories.push('Nuevo');
    
    if(categories.includes(valueIncoming)) return;
    setCategories([ valueIncoming , ...categories]);
  };
  
  
  return (
    <>
      <h3>GiftExpertApp</h3>

      <AddCategory 
        
        onSentCategory={ (valueIncoming) =>{
          console.log('valueIncoming ' + valueIncoming)
          onAddCategory(valueIncoming)
        }  }
      //setCategories={setCategories} 
      ></AddCategory>

      
        {
          categories.map( category => {
            //console.log(category);
            return <GifGrid key={category} category={category}></GifGrid>
          })
        }
      
    </>
  )
}
