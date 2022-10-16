import React ,{useState} from 'react';

const initState = ['anjan','thapa']

const ArrayUseState = () => {

    const [person,setPerson] = useState(initState);

    const changePerson = () => {
        setPerson((person) => [...person,['ram']])

    }
    
    console.log('ArrayUseState rendered');

    return ( 
        <div>
        <button onClick={changePerson}>click</button>
        {person.map((p,idx) => {
            return <div key={idx}>{p}</div>
        })}
        </div>
     );
}
 
export default ArrayUseState;