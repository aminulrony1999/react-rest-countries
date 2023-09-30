import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name,capital,flags} = props.country;
    return (
        <div style ={{backgroundColor: 'lightpink',padding : '15px', border : '3px solid maroon', margin : '15px',borderRadius: '2px'}}>
        <h2> Name : {name.common} </h2>
        <h3> Capital : {capital}</h3>
        <div>
            <img src={flags.png} alt="" />
        </div>
    </div>
    );
};

export default Country;