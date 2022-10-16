import React, {useState} from 'react';

const ParentOne = ({children}) => {
    const [count,setCount] = useState(0);


    console.log('parent rendered');
    return ( 
        <div>
            <button onClick={() => setCount((c) => c + 1)}>count - {count}</button>
            {children}
        </div>
     );
}
 
export default ParentOne;