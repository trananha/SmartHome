import './index.css'
import {Link} from 'react-router-dom'


function Menu() {
    return (
        <div className="menu">
            <div className="info">
                <div className="info-icon">
                    <i className="fas fa-temperature-low"></i>
                </div>
                <h4>Nhiệt độ</h4>
            </div>
            <div className="info">
                <div className="info-icon">
                    <i className="fas fa-cloud-rain"></i>
                </div>
                <h4>Độ ẩm</h4>
            </div>
            <div className="info">
                <div className="info-icon">
                    <i className="fas fa-gas-pump"></i>
                </div>
                <h4>Gas</h4>
            </div>
            <div className="info">
                <div className="info-icon">
                    <i className="fas fa-door-open"></i>
                </div>
                <h4>Cửa</h4>
            </div>
            <div className="info">
                <div className="info-icon">
                    <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Đèn</h4>
            </div>
        </div>
    )
}

export default Menu