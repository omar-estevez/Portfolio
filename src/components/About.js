import '../styles/About.scss';
import backImg from '../assets/images/me-car.JPEG';
import overImg from '../assets/images/me-moto.JPEG';
import { useWindowSize } from "react-use";

const About = ({ mainClassName }) => {

    const { height, width } = useWindowSize();

    const getFontSize = (width, pos) => {
        // eslint-disable-next-line default-case
        switch (pos) {
            case 'first':
                if (width < 768) return width * 0.034;       // móvil
                if (width < 1024) return width * 0.028;      // tablet
                return width * 0.014; // desktop
            case 'second':
                if (width < 768) return width * 0.044;       // móvil
                if (width < 1024) return width * 0.034;      // tablet
                return width * 0.012;
            case 'third':
                if (width < 768) return width * 0.044;       // móvil
                if (width < 1024) return width * 0.034;      // tablet
                return width * 0.015;
        }
    };

    const getPosText = (width, height, pos) => {
        // eslint-disable-next-line default-case
        switch (pos) {
            case 'first':
                if (width < 768) return height * 0.15;       // móvil
                if (width < 1024) return height * 0.15;      // tablet
                return height * 0.15; // desktop
            case 'second':
                if (width < 768) return height * 0.52;       // móvil
                if (width < 1024) return height * 0.49;      // tablet
                return height * 0.45;
            case 'third':
                if (width < 768) return height * 0.43;       // móvil
                if (width < 1024) return height * 0.49;      // tablet
                return height * 0.70;
        }
    }

    return (
        <div className={mainClassName}>
            <div className='container-about'>
                <h2>Meet me</h2>
                <p className='first' style={{ width: width * 0.34, fontSize: getFontSize(width, 'first'), top: getPosText(width, height, 'first') }}>
                    My name is Omar Estevez, and I was born and raised in Bogotá, Colombia. Since an early age,
                    I have been fascinated by computers and technology. This passion led me to become a Systems Engineer,
                    where I transform ideas into functional, intuitive, and visually engaging digital experiences.
                </p>
                <p className='second' style={{ width: width * 0.4, fontSize: getFontSize(width, 'second'), top: getPosText(width, height, 'second') }}>
                    For me, family is the most important pillar in life. Their unwavering support, love, and shared memories
                    are the foundation of who I am. Through every challenge and triumph, they remain my greatest source of strength,
                    resilience, and joy.
                </p>
                <p className='third' style={{ width: width * 0.28, fontSize: getFontSize(width, 'third'), top: getPosText(width, height, 'third') }}>
                    Beyond technology, my passions revolve around cars and motorcycles. The thrill of the open road,
                    the hum of a powerful engine, and the freedom to explore new horizons ignite my creativity and fuel my spirit.
                </p>
                <div class="image-container">
                    <img src={backImg} alt="Background" class="background-image" loading="lazy" />
                    <img src={overImg} alt="Overlay" class="overlay-image" loading="lazy" />
                </div>
            </div>
        </div>
    );
}

export default About;