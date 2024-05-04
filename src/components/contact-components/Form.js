import '../../styles/Form.scss';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = ({ setResponse, setFormData }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    /* const getIsFormValid = () => {
        return name && email && message;
    }; */

    const clearForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        setFormErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!name) errors.name = 'Name is required.';
        if (!email) errors.email = 'Email is required.';
        if (!message) errors.message = 'Message is required.';

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            // Handle form submission logic here
            const formData = createObject(e.target.elements);
            setFormData(formData);
            setResponse(true);

            emailjs.sendForm('service_87n0aqh', 'template_wjfjb6t', e.target, 'dICfygEXYzd9ULcSD')
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });

            clearForm();
        }
    };

    const createObject = (data) => {
        return {
            'Name': data['name']['value'],
            'Email': data['email']['value'],
            'Message': data['message']['value']
        }
    }

    return (
        <>
            <div className='form'>
                <form className="form-container" onSubmit={handleSubmit}>
                    <fieldset>
                        <div className='Field'>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name='user_name' aria-label="On Click" value={name} onChange={(e) => setName(e.target.value)} required />
                            {formErrors.name && <span className="error">{formErrors.name}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name='user_email' aria-label="On Click" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            {formErrors.email && <span className="error">{formErrors.email}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name='user_message' aria-label="On Click" value={message} onChange={(e) => setMessage(e.target.value)} required />
                            {formErrors.message && <span className="error">{formErrors.message}</span>}
                        </div>
                        <div className='btn'>
                            <button type="submit">Send Message</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Form;