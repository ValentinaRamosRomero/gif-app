import React from 'react'

export const ImageItem = ({ title, url }) => {
    return (
        <div className='container-gif'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
