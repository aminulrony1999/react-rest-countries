import React from 'react';

const Country = (props) => {
    const {name,capital} = props.country;
    return (
        <div style ={{backgroundColor: 'lightpink',padding : '15px', border : '3px solid maroon', margin : '15px',borderRadius: '200px'}}>
        <h2> Name : {name.common} </h2>
        <h3> Capital : {capital}</h3>
    </div>
    );
};

export default Country;