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
            {windowWidth > breakpoint ? (
            <video className="background-video" autoPlay muted playsInline webkit-playsinline="true" loop preload="auto">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            ) : (
                <img src={Gif} className='gif-styles' alt="Background" />
            )}
            <div className='shadow'></div>
            <div className='letters'>
                <span className='l'>L</span>
                <span className='o'>O</span>
                <span className='a'>A</span>
                <span className='d'>D</span>
                <span className='i'>I</span>
                <span className='n'>N</span>
                <span className='g'>G</span>
                <span className='p-one'>.</span>
                <span className='p-two'>.</span>
                <span className='p-three'>.</span>
            </div>
        </div>
    );
}

export default Intro;