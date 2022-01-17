import React,{Component} from 'react';

import CardList from '../Component/CardList';
// import {robots} from './robots'; we elimated this file we used Json Placehold to make more real!
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll';
import './App.css';
class App extends Component{

    constructor()
    {
        super()
        this.state={
            'robots':[],
            'searchField':''
        }
        
    }

    componentDidMount()
    {
fetch('https://jsonplaceholder.cypress.io/users').then(response=>
{
    return response.json();
})
.then(users=>{
    this.setState({robots:users});
}
    )
}

    onSearchChange=(event)=>
    {
        this.setState({searchField:event.target.value});
    }

    
    render(){
        const FilterRobots=this.state.robots.filter(robot =>
            {
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            })
    if(this.state.robots.length===0)
    {
        return <h1 className='tc f2 pa6'>L-O-A-D-I-N-G</h1>
    }else{
    return(
        
        <div className="tc">
        <h1 className='f2 pa2'>Robo Friends</h1>
        
        <SearchBox searchChange={this.onSearchChange}/>
        <hr/>
        <Scroll>
<CardList robots={FilterRobots}/>
</Scroll>
    <footer className='f4 pa3'><i>Made by Pranit Rathod :)</i></footer>
    </div>
    );

    }//else ends 
}
    //render ends
}//class ends

export default App;



