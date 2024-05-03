import '../../styles/SocialMediaMain.scss';
import { IoShareSocial } from "react-icons/io5";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";

const SocialMediaMain = ({ introRefSm }) => {

    const handleIconClick = (type) => {
        let url = '(https://www.dinogoldinternational.com)';

        switch (type) {
            case 'Share':
                handleShare();
                break;
            case 'Facebook':
                url = 'https://www.facebook.com/omar.estevez.95';
                window.open(url, '_blank');
                break;
            case 'Instagram':
                url = 'https://www.instagram.com/oestevez23';
                window.open(url, '_blank');
                break;
            case 'LinkedIn':
                url = 'https://linkedin.com/in/estevezn-omar/';
                window.open(url, '_blank');
                break;
            case 'GitHub':
                url = 'https://github.com/omar-estevez';
                window.open(url, '_blank');
                break;
            default:
                break;
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Omar's Portfolio",
                    url: window.location.href
                });
                console.log('Content shared successfully');
            } catch (error) {
                console.error('Error sharing content:', error);
            }
        } else {
            // Fallback for browsers that do not support the Web Share API
            console.log('Web Share API is not supported in this browser.');
        }
    };

    return (
        <div className='social-media' ref={introRefSm}>
            <IoShareSocial className='icons' onClick={() => handleIconClick('Share')} />
            <TiSocialFacebook className='icons' onClick={() => handleIconClick('Facebook')} />
            <TiSocialInstagram className='icons' onClick={() => handleIconClick('Instagram')} />
            <TiSocialLinkedin className='icons' onClick={() => handleIconClick('LinkedIn')} />
            <TiSocialGithub className='icons' onClick={() => handleIconClick('GitHub')} />
        </div>
    )
}

export default SocialMediaMain;