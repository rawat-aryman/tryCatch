import React from 'react';
import './card.css';

const Card = (props) =>
{
    return (
        <div className='cards'>
                <div className='card'>
                <img src={props.imgSrc} alt='myPic' className='cardImg'/>
                <div className='card-info'>
                    <span className='card-category'>{props.streamingPlatform}</span>
                    <h3 className='card-title'>{props.title}</h3>
                    <a href={props.redirect} target="_blank">
                    <button> Watch Now </button>
                    </a>
                </div>
                </div>
        </div>
    )
}

export default Card;