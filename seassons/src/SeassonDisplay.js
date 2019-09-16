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

    console.log(seasson);
    return(
        <div>Seasson Display!</div>
    );
}

export default SeassonDisplay;