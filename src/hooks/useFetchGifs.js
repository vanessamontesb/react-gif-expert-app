import { useEffect, useState } from "react";

import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isloading, getIsloading] = useState(true);

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      getIsloading(false);

    };
    useEffect(() => {
      getImages();
    }, []);

  return {
    images,
    isloading,
  }
  
}

export default useFetchGifs
