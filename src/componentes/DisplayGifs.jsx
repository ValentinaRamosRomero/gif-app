import React from 'react'
import useApi from '../hooks/useApi';
import { ImageItem } from './ImageItem';

export const DisplayGifs = ({category}) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=3UEU9rIiqeOWrgxbBOVVxeDKB4tVBRab&q=${category}&limit=15`;
    const {loading, data} = useApi(url);

  return (
    <div className='container-gifs'>
        
        {
            loading ? 
            data.map(img => (
                <ImageItem 
                    key={img.id}
                    title={img.title} 
                    url={img.images.downsized_medium.url}/>
            ))
            : ''
        }
         </div>
  )
}
