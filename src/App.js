import React,{Component} from 'react';

import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
class App extends Component{

    constructor()
    {
        super()
        this.state={
            'robots':robots,
            'searchField':''
        }
        
    }
    OnSearchChange=(event)=>{
    
        this.setState({'searchField':event.target.value})
       
        
    }
    render(){
        const FilterRobots=this.state.robots.filter(robot =>
            {
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            })
    return(
        
        <div className="tc">
        <h1 id='robotHeading' className='f2 pa2'>Robo Friends</h1>
        
        <SearchBox searchChange={this.OnSearchChange}/>
        <hr/>
<CardList robots={FilterRobots}/>
    <footer className='f4 pa2'><i>Made by Pranit Rathod :)</i></footer>
    </div>
    );

    }
}

export default App;



