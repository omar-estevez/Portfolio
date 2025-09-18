import '../styles/Skills.scss';
import ProgressBar from "./skills-components/ProgressBar";
import imageOne from '../assets/images/react_specialization.jpg';
import imageTwo from '../assets/images/python_specialization.jpg';
import ImageCertComponent from './skills-components/ImageCertComponent';

const Skills = ({ mainClassName }) => {

    const skills_data = [{
        name: 'HTML5',
        completed: 100,
        color: 'RGB(241, 101, 41)',
        secondColor: '#2c3e50'
    }, {
        name: 'CSS',
        completed: 100,
        color: 'RGB(38, 77, 228)',
        secondColor: '#2c3e50'
    }, {
        name: 'JAVASCRIPT',
        completed: 100,
        color: 'RGB(240, 219, 79)',
        secondColor: '#2c3e50'
    }, {
        name: 'ANGULAR FRAMEWORK',
        completed: 80,
        color: 'RGB(181, 46, 49)',
        secondColor: '#2c3e50'
    }, {
        name: 'IONIC',
        completed: 40,
        color: 'RGB(73, 138, 255)',
        secondColor: '#2c3e50'
    }, {
        name: 'REACT LIBRARY',
        completed: 60,
        color: 'RGB(97, 219, 251)',
        secondColor: '#2c3e50'
    }, {
        name: 'REACT NATIVE',
        completed: 60,
        color: 'RGB(97, 219, 251)',
        secondColor: 'RGB(217, 217, 217)'
    }, {
        name: 'JAVA',
        completed: 20,
        color: 'RGB(181, 46, 49)',
        secondColor: 'RGB(38, 77, 228)',
    }, {
        name: 'PYTHON',
        completed: 30,
        color: 'RGB(240, 219, 79)',
        secondColor: 'RGB(73, 138, 255)'
    }];

    const image_data = [{
        name: 'React Specialization',
        image: imageOne,
    }, {
        name: 'Python Specialization',
        image: imageTwo,
    }];

    return (
        <div className={mainClassName}>
            <div className="container-skills">
                <h2>Skills</h2>
                <div className='sub-container'>
                    <div className='skills'>
                        {
                            skills_data.map((data, index) =>
                                <div key={index}>
                                    <h4>{data.name}</h4>
                                    <ProgressBar completed={data.completed} color={data.color} secondColor={data.secondColor} />
                                </div>
                            )
                        }
                    </div>
                    <div className='certification'>
                        <h3>Certifications</h3>
                        <ImageCertComponent image_data={image_data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills; 