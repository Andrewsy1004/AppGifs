import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";  

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const newImages = await getGifs(category);
        setImages(newImages);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };
    getImages();  
  }, [category]);

  return {
    images: images,
  }
}
