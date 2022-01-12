import React from 'react';


const Cards= (props)=>
{

return(
        
    <div id="cards" className='bg-light-green dib br3 pa3 ma2 grow shadows tc '>

    <img alt="robo" src={`https://robohash.org/${props.id}`}/>
    <div>
    <h2>{props.name}</h2>
    <p>{props.email}</p>
    </div>
</div>

);

}
export default Cards;