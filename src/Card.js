import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-blue dib br4 pa3 ma2 grow bw3 shadow-5'>
            <img alt='roboImage' src={`https://robohash.org/${props.id}?300x300`}></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;
