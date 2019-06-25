import React from 'react';

export default function Participant(props){
    console.log(props);
    let session = "left session";
    if(props.inSession){
        if(props.onStage){
            session = 'on stage';
        }
        else{
            session = 'in session'
        }
    }

    return (
        <div className= 'Participant'>
            <img src={props.avatar} alt='avatar of participant'></img>
            <h3>{props.name}</h3>
            <p>{session}</p>
        </div>
    )
}
