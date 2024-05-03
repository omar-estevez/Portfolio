import '../../styles/ArrowsMain.scss';
import HoverableItem from './HoverableItem';

const ArrowsMain = ({ isElementActive, handleClick }) => {
    return (
        <div className='buttons'>
            <HoverableItem text={'About'} position={'top'} classIcon={`button top ${isElementActive[0] ? 'active' : ''}`} classText={'text top'} isElementActive={isElementActive} handleClick={handleClick}/>
            <HoverableItem text={'Contact'} position={'bottom'} classIcon={`button bottom ${isElementActive[1] ? 'active' : ''}`} classText={'text bottom'} isElementActive={isElementActive} handleClick={handleClick}/>
            <HoverableItem text={'Skills'} position={'left'} classIcon={`button left ${isElementActive[2] ? 'active' : ''}`} classText={'text left'} isElementActive={isElementActive} handleClick={handleClick}/>
            <HoverableItem text={'Projects'} position={'right'} classIcon={`button right ${isElementActive[3] ? 'active' : ''}`} classText={'text right'} isElementActive={isElementActive} handleClick={handleClick}/>
        </div>
    )
}

export default ArrowsMain;