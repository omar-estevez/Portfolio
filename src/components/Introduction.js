import '../styles/Introduction.scss';

const Introduction = ({ introRef }) => {
    return (
        <div className='introduction' ref={introRef}>
            <h1>Omar Estevez</h1>
            <h2>System Engineer with a focus on web and mobile development. I love turning ideas into functional and beautiful digital experiences</h2>
            <button>Download Resume</button>
        </div>
    )
}

export default Introduction;