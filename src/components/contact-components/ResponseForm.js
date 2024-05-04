import '../../styles/ResponseForm.scss';


const ResponseForm = ({ formData }) => {

    return (
        <>
            <h3>Hi {formData.Name}, I've received your message! I’ll be in touch shortly!</h3>
        </>
    )
}

export default ResponseForm;