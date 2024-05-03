import '../styles/About.scss';
import backImg from '../assets/images/me-car.JPEG';
import overImg from '../assets/images/me-moto.JPEG';

const About = ({ mainClassName }) => {
    return (
        <div className={mainClassName}>
            <div className='container-about'>
                <h2>Meet me</h2>
                <p className='first'>
                    My name is Omar Estevez and i was born and raised in Bogota, Colombia. I always loved the computers then i decided to
                    be an system engineer, i love turning ideas into functional and beautiful digital experiences.
                </p>
                <p className='second'>
                    The most important thing in the world will always be my family. Their unwavering support, love,
                    and shared memories form the foundation of my life. Through ups and downs, they remain my constant source of strength and joy.
                </p>
                <p className='third'>
                    My passions have always revolved around cars and motorcycles.
                    The thrill of the open road, the hum of a powerful engine, and the freedom to explore, these are the elements that ignite my soul.
                </p>
                <div class="image-container">
                    <img src={ backImg } alt="Background" class="background-image" loading="lazy"/>
                    <img src={ overImg } alt="Overlay" class="overlay-image" loading="lazy"/>
                </div>
            </div>
        </div>
    );
}

export default About;