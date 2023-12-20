import { useState, useEffect } from "react";

import { getGifs } from '../helper/getGifs'


const useFetchGifs = ( category ) => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

      
  useEffect( () => {
    getGifs( category )
      .then( newImages => {
        setImages(newImages);
        setIsLoading(false); 
      });
  }, [])


  return {
    images,
    isLoading,
  }
}

export default useFetchGifs
