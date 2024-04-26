import '../styles/ContentMain.scss';

const ContentMain = ({ isElementActive }) => {
    return (
        <div className='content'>
            <div className={`layer top-layer ${isElementActive[0] ? 'active-top' : ''}`}>
                algo
            </div>

            <div className={`layer bottom-layer ${isElementActive[1] ? 'active-bottom' : ''}`}>
                algo
            </div>

            <div className={`layer left-layer ${isElementActive[2] ? 'active-left' : ''}`}>
                algo
            </div>

            <div className={`layer right-layer ${isElementActive[3] ? 'active-right' : ''}`}>
                algo
            </div>
        </div>
    )
}

export default ContentMain;