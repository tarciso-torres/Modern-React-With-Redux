import React from 'react';

const getSeasson = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeassonDisplay = props => {
    const seasson = getSeasson(props.lat, new Date().getMonth());
    const text = seasson === 'winter' ? 'Burr, it is chilly' : 'Let\'s hit the beach';
    const icon = seasson === 'winter' ? 'snowflake' : 'sun';

    return(
        <div>
            <i className={ `${icon} icon` } />
                <h1>{text}</h1>
            <i className={ `${icon} icon` } />
        </div>
    );
}

export default SeassonDisplay;