import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        content: `Where is my surfboard?`,
        iconName: `sun`
    },
    winter: {
        content: `It is fresh today!`,
        iconName: `coffee`
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? "winter" : "summer";
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    
    const { content, iconName } = seasonConfig[season]; 

    return (
        <div className={`season-display ${season}`}>
        <i className={`icon-right massive ${iconName} icon`} />
        <h1>{content}</h1>
        <i className={`icon-left massive ${iconName} icon`} />
        </div>
    )
};

export default SeasonDisplay;