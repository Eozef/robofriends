import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-blue dib br4 pa3 ma2 grow bw3 shadow-5'>
            <img alt='roboImage' src={`https://robohash.org/${id}?300x300`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
