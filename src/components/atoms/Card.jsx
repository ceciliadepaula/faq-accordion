import React from 'react';
import IconStar from '../../assets/images/icon-star.svg';

function Card(props) {
    return (
        <>
            <div className='card-container'>
                <div className='title'>
                    <img src={IconStar} alt="Ícono de estrella" />
                    <h1>{props.title}</h1>
                </div>
                <div>
                    {props.content}
                </div>
            </div>
        </>
    );
}

export default Card;
