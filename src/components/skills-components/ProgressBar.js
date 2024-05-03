import '../../styles/ProgressBar.scss'
import React from 'react';

const ProgressBar = ({ completed, color, secondColor }) => {

    const fillerStyles = {
        width: `${completed}%`,
        backgroundColor: `${color}`,
        backgroundImage: `repeating-linear-gradient(90deg,
            transparent 0.9%,
            transparent 6%,
            ${secondColor} 5%,
            ${secondColor} 10%)`
    }

    return (
        <div className='containerStyles'>
            <div className='fillerStyles' style={fillerStyles}>
                <span className='labelStyles'>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
