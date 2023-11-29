import { useState } from "react";
import { AddCategoria, GifGrid } from "./components/index";
export const GifApp = () => {    
    const [categorias, setCategorias] = useState(["Iron Man"]);
    const onAddCategori = (newCategory ) => {
        if(categorias.map(c => c.toLowerCase()).includes(newCategory.toLowerCase())) return;
        setCategorias([newCategory, ...categorias]);
    }
    
    return (
        <>
            <h2 className="title-app">App Gifs</h2>            
            <AddCategoria  onNewCategori={onAddCategori} />
            {
                categorias.map((categoria) => (
                    <GifGrid 
                     key={categoria} 
                     category={categoria}
                    /> 
                ))
            }
        </>
    );
}