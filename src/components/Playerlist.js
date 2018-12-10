import React from 'react';
import Card from '../components/Card';

const Playerlist = ({ players }) => {
    const cardComponent = players.map((player, i) => {
        return (
            <Card 
                key={i} 
                id={players[i].id} 
                name={players[i].name} 
                playertag={players[i].playertag} 
                weapon={players[i].weapon} 
                role={players[i].role}
            />
        )
    })
    return(
        <div>
            { cardComponent }
        </div>
    )
}

export default Playerlist;