import React from 'react';

const Card = ({ id, name, playertag, weapon, role }) => {
    return(
        <div className='bg-light-blue br4 bw3 dib pa3 ma2 grow shadow-4 tc'>
            <img alt='profile' src={`https://robohash.org/kittens123${id}1223323?set=set4`}/>
            <div>
                <h1>{name}</h1>
                <p>Playertag: <b>{playertag}</b> </p>
                <p>Weapon: <b>{weapon}</b> </p>
                <p>Role: <b>{role}</b> </p>
            </div>
        </div>
    );
}

export default Card;