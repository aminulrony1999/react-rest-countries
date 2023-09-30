import React from 'react';

const Country = (props) => {
    return (
        <div style ={{backgroundColor: 'lightpink',padding : '15px', border : '3px solid maroon', margin : '15px',borderRadius: '200px'}}>
        <h2> Name : {props.country.name.common} </h2>
        <h3> Capital : {props.country.capital}</h3>
    </div>
    );
};

export default Country;