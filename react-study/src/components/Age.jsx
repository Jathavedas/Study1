import React from 'react';

const Age = (props) => {
    const age = props.age; 
    
    return (
        age >= 18 ? <div>over age</div> : <div>under age</div>
    );
}

export default Age;
