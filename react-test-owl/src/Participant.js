import React from 'react';


function Participant(props){

    console.log(props.participants);

    const generateParticipants = () => {
        return props.participants.map((participant, key) => {
            let status;
            if (!participant.inSession) status = 'left session';
            participant.onStage ? status = 'on stage' : status = 'in session';
            return (
                <div key={key} className='Participant'>
                    <img src={participant.avatar} alt='avatar of participant'></img>
                    <h3>{participant.name}</h3>
                    <p>{status}</p>
                </div>
            )
        })
    };

    return (
        generateParticipants()
    )
}

export default Participant;