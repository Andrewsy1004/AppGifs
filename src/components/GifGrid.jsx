import { Gifitems } from "./Gifitems";
import { useFetchGifs } from "../hooks/FecthGifs";
export const GifGrid = ({ category }) => {
  const {images} = useFetchGifs(category);
   
  if (images.length === 0) {
    return null;
  }
  
  return (
    <>
    <h3>{category}</h3>
    <div className="card-grid">
      {images.map((image) => (
        <Gifitems key={image.id} {...image} />
      ))}
    </div>
  </>
  );
};
