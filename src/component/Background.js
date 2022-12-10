import { useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../App.css"

function Background() {
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
   
      <Particles
            id="tsparticles"
            init={particlesInit}
            className="background"
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#999999",
                    },
                    links: {
                        color: "#d3d3d3",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
 
  );
}

export default Background;
