import React from 'react';
import './cards.styles.css';


export const Card = (props) => (
    <div className='card-container'>
        {
            <div>
                <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
                <h2> {props.monster.name}</h2>
                <h2> {props.monster.email}</h2>
            </div>
        }
    </div>
);