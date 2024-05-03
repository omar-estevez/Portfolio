import '../../styles/Introduction.scss';
import fileUrl from '../../assets/files/Resume_Omar_E.pdf';

const Introduction = ({ introRef }) => {

    return (
        <div className='introduction' ref={introRef}>
            <h1>Omar Estevez</h1>
            <h4>System Engineer with a focus on web and mobile development. I love turning ideas into functional and beautiful digital experiences</h4>
            <a href={fileUrl} download="Resume.pdf" >
                <button>Download Resume</button>
            </a>
        </div>
    )
}

export default Introduction;