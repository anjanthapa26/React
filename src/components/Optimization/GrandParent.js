import React, { useState } from 'react';
import ChildOne from './ChildOne';
import ParentOne from './ParentOne';

const GrandParent = () => {

    const [newCount, setNewCount] = useState(0);


    console.log('grand parent');
    return (  

        <>
        <button onClick={() => setNewCount((nc) => nc + 1)}>
            GrandParent Count - {newCount}
        </button>
        <ParentOne newCount = {newCount}>
            <ChildOne />
        </ParentOne>
        </>
    );
}


export default GrandParent
