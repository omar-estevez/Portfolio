import '../styles/Projects.scss';
import styled, { css } from 'styled-components';
import React, { useState, useEffect } from 'react';
import p_img_one from '../assets/images/Project_one.png';
import p_img_two from '../assets/images/Project_two.png';
import p_img_three from '../assets/images/Project_three.png';

const Projects = ({ mainClassName, isElementActive }) => {

    const [showElement, setShowElement] = useState(false);

    const projects_data = [{
        title: 'Dino Gold International',
        page: 'https://dinogoldinternational.com/',
        image: p_img_one
    }, {
        title: 'Triidy Soft',
        page: 'https://app.triidy.com/',
        image: p_img_two
    }, {
        title: 'Portfolio',
        page: 'https://omar-estevez.github.io/portfolio/',
        image: p_img_three
    }];

    const generateCSS = (count) => {
        let styles = '';
        const multiply = 360 / count;

        for (let i = 0; i < count; i++) {
            styles += `
        &:nth-of-type(${i + 1}) {
            transform: rotateY(${i * multiply}deg) translateZ(430px);
        }`;
        }

        return css`${styles}`;
    };

    useEffect(() => {
        let timer;
        if (isElementActive) {
            timer = setTimeout(() => {
                setShowElement(true);
            }, 2000);
        } else {
            setShowElement(false);
        }

        return () => clearTimeout(timer);
    }, [isElementActive]);

    const StyledBox = styled.div`${props => generateCSS(props.count)}`;

    return (
        <div className={mainClassName}>
            <div className="container-projects">
                <h2>Projects</h2>
                {showElement ? <div className='box-projects'>
                    {
                        projects_data.map((data, index) =>
                            <StyledBox className='box' style={{ backgroundImage: `url(${data.image})` }} count={projects_data.length} key={index}>
                                <a href={data.page} target='_blank' rel="noreferrer"><h3>{data.title}</h3></a>
                            </StyledBox>
                        )
                    }
                </div> : <h3 className='load'>Loading...</h3>}
            </div>
        </div>
    )
}

export default Projects;