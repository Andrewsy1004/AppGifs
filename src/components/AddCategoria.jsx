import { useState } from "react";

export const AddCategoria = ({ onNewCategori }) => {
    const [inputValue, setInputValue] = useState("");   
    
    const onAdd = (event) => {
        setInputValue(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategori(inputValue.trim());
        setInputValue(""); 
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}  
                onChange={onAdd}
            />
        </form>
    )   
}
