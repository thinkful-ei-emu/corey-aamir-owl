import React from 'react';
import Participant from './Participant.js';
//import participants from './participants.js'

function App(props) {  
  //const users = [{userName:'aamir'}, {userName:'Casey'}, {userName:'Corey'}];
  const output = props.participants.map(function(peep){
    console.log('name, '+ peep.name);
    console.log('onStage, '+ peep.onStage);
    console.log('inSession, '+ peep.inSession);

    return (
      <Participant name={peep.name} avatar={peep.avatar} foo='bar' inSession={peep.inSession} onStage={peep.onStage}/>
    )
  });
  console.log(output);
  return (
    <main className='App'>      
        {output}
    </main>
  );
}

export default App;
