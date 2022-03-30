import './App.css';
import Header from './components/Header/index';
import pic from './components/image/smarthome.jpg';
import { FaHouseUser } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="main">
        <img src={pic} alt="pic" />

        <div className='login'>
          <span className='dot'>
            <FaHouseUser className='logo' />
          </span>
          <div className='form_title'>
            
          </div>
          <form></form>
        </div>
      </div>
    </div>
  );
}

export default App;
