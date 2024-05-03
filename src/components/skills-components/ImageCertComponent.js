import '../../styles/ImageCertComponent.scss';
import React, { useState } from 'react';

const ImageCertComponent = ({image_data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDataImg, setIsDataImg] = useState('');

    const handleImageClick = (dataImg) => {
        setIsDataImg(dataImg);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsDataImg('');
    };

    return (
        <>
        <div className='img-cert-container'>
            {
                image_data.map((data, index) =>
                    <img src={data.image} alt={data.name} key={index} onClick={() => handleImageClick(data.image)}/>
                )
            }
            
        </div>
        {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <img src={isDataImg} alt="Expanded View" />
                    </div>
                </div>
            )}
        </>
        
        
    );
};

export default ImageCertComponent;