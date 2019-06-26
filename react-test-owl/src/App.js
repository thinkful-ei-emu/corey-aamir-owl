import React from 'react';
import Participant from './Participant.js';
import Stage from './Stage.js'

function App(props) {  
  //const users = [{userName:'aamir'}, {userName:'Casey'}, {userName:'Corey'}];
  // const output = props.participants.map(function(peep){
  //   // console.log('name, '+ peep.name);
  //   // console.log('onStage, '+ peep.onStage);
  //   // console.log('inSession, '+ peep.inSession);

  //   return (
  //     <div key={peep.id}>
        
  //     </div>
  //   )
  // });
  //console.log(output);
  return (
    <main className='App'>  
        <Participant participants={props.participants} />
        <Stage participants={props.participants} />
    </main>
  );
}

export default App;
