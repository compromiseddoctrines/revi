import React from 'react';

const seasonConfig = {
    summer: { // pag summer results nung summer 
        text:'Let G beach',
        iconName: 'sun'
    },
    winter: { // pag winter results nung getSeason 
        text: 'Lamiggers',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => { // will result to winter or summer 
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth()); // getseason(lat,month)
    const {text, iconName} = seasonConfig[season] // var text or icon name sa seasonconfig
    
    return(
        <div className={`season-display ${season}`}>
            <i className={`massive icon-left ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`massive icon-right ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay