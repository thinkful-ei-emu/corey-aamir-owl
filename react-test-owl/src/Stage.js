import React from 'react';

// const Stage = props => props.participants.filter(participant => participant.onStage).map((participant, id) => {
//         return (
//             <div className="onStage" key={id} >
//                 <div>{participant.name}</div>
//                 <button>sound</button>
//                 <button>eyeglass</button>
//             </div>
//         );
// });

function Stage(props) {
    const participants = props.participants.filter(participant => participant.onStage);
    const renderParticipants = participants.map((participant, key) => {
        return (
            <div className="onStage" key={key} >
                <div>{participant.name}</div>
                <button>sound</button>
                <button>eyeglass</button>
            </div>
        );
    });

    return renderParticipants;
}

export default Stage;
