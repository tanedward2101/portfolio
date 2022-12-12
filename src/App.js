import { useCallback } from "react";
import logo from './component/logo2.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/Navigation';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Background from "./component/Background"

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div className="App">
      
     
      {/* <Background/> */}
      <Navigation />
      <div className="main-logo">
      <img src={logo} className="main-img" />
      </div>
      <div className="main-text">
        Hi, I'm Edward, a Full-stack web developer. 
      </div>
    </div>
  );
}

export default App;
