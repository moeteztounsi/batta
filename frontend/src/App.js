
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './bootstrap.css';
import Register from './Screens/RegisterScreen/Register';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LandingScreen from './Screens/LandingScreen/LandingScreen';

const App = ()=> {
  return (
    <Router>
      <Header/>
      <Routes >
        <Route path="/" element={<LandingScreen/>} exact />
        <Route path="/home" element={<HomeScreen/>} />
        <Route path ="/register" element ={<Register/>}/>
      </Routes>
      <Footer/>
    </Router>
     
  );
}

export default App;
