import '../styles/Main.scss';
import React, { useState, useRef } from 'react';
import backgroundVideo from '../assets/videos/Me_aquarium_animation.mp4';
import Introduction from '../components/main-components/Introduction';
import ArrowsMain from '../components/main-components/ArrowsMain';
import ContentMain from '../components/main-components/ContentMain';
import SocialMediaMain from '../components/main-components/SocialMediaMain';

const Main = () => {

    const introRef = useRef(null);
    const introRefSm = useRef(null);
    const [isElementActive, setElementActive] = useState([false, false, false, false]);

    const handleClick = (side) => {
        let newActiveStates = [...isElementActive];

        switch (side) {
            case 'top':
                newActiveStates[0] = !newActiveStates[0];
                break;
            case 'bottom':
                newActiveStates[1] = !newActiveStates[1];
                break;
            case 'left':
                newActiveStates[2] = !newActiveStates[2];
                break;
            case 'right':
                newActiveStates[3] = !newActiveStates[3];
                break;
            default:
                break;
        }
        setElementActive(newActiveStates);
    };

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;

        if (introRef.current && introRefSm.current) {
            const { offsetWidth: width, offsetHeight: height } = introRef.current;
            const { offsetWidth: widthSm, offsetHeight: heightSm } = introRefSm.current;

            // Calculate the movement for the introduction box
            const moveX = (clientX - width / 2) / (width / 2) * -2;
            const moveY = (clientY - height / 2) / (height / 2) * -2;

            // Calculate the movement for the social media box
            const moveXSm = (clientX - widthSm / 2) / (widthSm / 2) * -1;
            const moveYSm = (clientY - heightSm / 2) / (heightSm / 2) * -1;

            // Apply the transformations
            introRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
            introRefSm.current.style.transform = `translate(${moveXSm}px, ${moveYSm}px)`;
        }
    };

    return (
        <div className='main-container' onMouseMove={handleMouseMove}>

            <Introduction introRef={introRef} />

            <SocialMediaMain introRefSm={introRefSm} />

            <video autoPlay loop muted playsInline>
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <ArrowsMain isElementActive={isElementActive} handleClick={handleClick} />

            <ContentMain isElementActive={isElementActive} />

        </div>
    )
};

export default Main;