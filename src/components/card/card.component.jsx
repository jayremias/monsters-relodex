import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`} alt="{ props.monster.name }"/>
        <h2 key={props.key}>{ props.monster.name }</h2>
        <p>{ props.monster.email }</p>
    </div>
)