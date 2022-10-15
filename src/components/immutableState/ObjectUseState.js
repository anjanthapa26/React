import React ,{useState} from 'react';



const initState = {
    fname: 'anjan',
    lname: 'thapa'
}
const ObjectUseState = () => {

    const [person, setPerson] = useState(initState);

    const changeName = () => {
        const newPerson = {...person}
        newPerson.fname = 'ram'
        newPerson.lname = 'shahi thakuri'
        setPerson(newPerson);
    }

    console.log('objectusestate rendered');
    return (  
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    );
}
 
export default ObjectUseState;