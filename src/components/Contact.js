import '../styles/Contact.scss';
import { useState } from 'react';
import Form from './contact-components/Form';
import ResponseForm from './contact-components/ResponseForm';

const Contact = ({ mainClassName }) => {

    const [response, setResponse] = useState(false);
    const [formData, setFormData] = useState(null)

    return (
        <div className={mainClassName}>
            <div className="container-contact">
                <h2>Contact Me</h2>
                <div className='sub-container'>
                    {!response && <Form setResponse={setResponse} setFormData={setFormData} />}
                    {response && <ResponseForm formData={formData}/>}
                </div>
            </div>
        </div>
    );
}

export default Contact;