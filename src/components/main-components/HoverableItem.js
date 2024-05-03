import '../../styles/HoverableItem.scss';
import React, { useState } from 'react';
import { HiArrowSmUp} from "react-icons/hi";

const HoverableItem = ({ text, position, classIcon, classText, isElementActive, handleClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleHoverLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <HiArrowSmUp className={classIcon}
                onClick={() => handleClick(position)}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverLeave} />
            {isHovered ? <span className={classText} >{text}</span> : ''}
        </>

    );
};

export default HoverableItem;