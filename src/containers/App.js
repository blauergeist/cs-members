import React from 'react'
import Playerlist from '../components/Playerlist'
import Searchbox from '../components/Searchbox'
import { players } from '../players'
import { Component } from 'react'
import '../containers/App.css'


class App extends Component {
    constructor(){
        super()
        this.state={
            players: players,
            searchfield: ''
        }
    }

    onInputSearch = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const { players, searchfield} = this.state;
        const filteredPlayers = players.filter( player => {
            return player.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                    <h1 className='title f1'>Team RPR5</h1>
                    <Searchbox searchInput = {this.onInputSearch}/>
                    <Playerlist players = {filteredPlayers} />
            </div> 
        );
    }

}

export default App;