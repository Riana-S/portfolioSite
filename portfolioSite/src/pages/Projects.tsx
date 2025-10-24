import LightRays from '../components/LightRays';
import Navbar from '../components/navbar';
import './Projects.css'

export default function Projects() {
    return (
      <>
        <header>
          <div id="background-light">
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
          <div id="top-light">
            <Navbar />
            <h1>Projects</h1>
            <h3>by Riana Santos</h3>
          </div>
        </header>
      </>
    );
  }