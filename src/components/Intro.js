import '../styles/Intro.scss';
import video from '../assets/videos/back_intro_pattern.mp4';

const Intro = () => {
    return (
        <div className='intro-container'>
            <video className="background-video" autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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