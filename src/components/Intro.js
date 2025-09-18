import '../styles/Intro.scss';
import React, { useState, useEffect } from 'react';
import video from '../assets/videos/back_intro_pattern.mp4';
import Gif from '../assets/gifs/back_intro_pattern.gif';

const Intro = () => {

    const breakpoint = 1007;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='intro-container'>

            <img src={Gif} className='gif-styles' alt="Background" />

        </div>
    );
}

export default Intro;