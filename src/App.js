import { useCallback } from "react";
import logo from './img/logo2.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Scene } from 'three';
import { Background, Navigation, Content, ThreeD } from './component'


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
      {/* <Background /> */}
      {/* <Navigation />
      <Content /> */}
      <ThreeD />
    </div>
  );
}

export default App;
