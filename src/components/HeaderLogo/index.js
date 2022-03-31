import './index.css';
import { FaUserAlt } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";

function HeaderwLogo({title}) {
    return (
        <div className="header">
            <div className='logo'>
                <FaHouseUser />
            </div>
            <div className='title'>
                {title}
            </div>
            <div className='user'>
                <FaUserAlt />
            </div>
        </div>
    );
}
  
export default HeaderwLogo;