import './index.css'
import {Link} from 'react-router-dom'


function Menu() {
    return (
        <div className="menu">
            <div className="info">
                <Link to="./temp_humid">
                    <div className="info-icon">
                        <i className="fas fa-temperature-low"></i>
                    </div>
                    <h4>Nhiệt độ</h4>
                </Link>
            </div>
            <div className="info">
                <Link to="./temp_humid">
                    <div className="info-icon">
                        <i className="fas fa-cloud-rain"></i>
                    </div>
                    <h4>Độ ẩm</h4>
                </Link>
            </div>
            <div className="info">
                <Link to="./gas">
                    <div className="info-icon">
                        <i className="fas fa-gas-pump"></i>
                    </div>
                    <h4>Gas</h4>
                </Link>
            </div>
            <div className="info">
                <Link to="./door">
                    <div className="info-icon">
                        <i className="fas fa-door-open"></i>
                    </div>
                    <h4>Cửa</h4>
                </Link>
            </div>
            <div className="info">
                <Link to="./light">
                    <div className="info-icon">
                        <i className="fas fa-lightbulb"></i>
                    </div>
                    <h4>Đèn</h4>
                </Link>
            </div>
      
        </div>
    )
}

export default Menu