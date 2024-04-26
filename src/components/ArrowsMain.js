import '../styles/ArrowsMain.scss';
import { HiArrowSmUp, HiArrowSmRight, HiArrowSmLeft, HiArrowSmDown } from "react-icons/hi";

const ArrowsMain = ({ isElementActive, handleClick }) => {
    return (
        <div className='buttons'>
            <HiArrowSmUp className={`button top ${isElementActive[0] ? 'active' : ''}`} onClick={() => handleClick('top')} />
            <HiArrowSmDown className={`button bottom ${isElementActive[1] ? 'active' : ''}`} onClick={() => handleClick('bottom')} />
            <HiArrowSmLeft className={`button left ${isElementActive[2] ? 'active' : ''}`} onClick={() => handleClick('left')} />
            <HiArrowSmRight className={`button right ${isElementActive[3] ? 'active' : ''}`} onClick={() => handleClick('right')} />
        </div>
    )
}

export default ArrowsMain;