import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async()=>{
        const newImages = await getGifs(category);
        console.log(newImages);
        setimages(newImages);
        setisLoading(false);
    }
    
    useEffect(() => {
       getImages();
       //console.log(images);
    }, []);

  return {
    images: images,
    isLoading: isLoading
  }
}
