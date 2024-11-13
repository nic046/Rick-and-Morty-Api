import { useEffect } from "react";
import "../styles/Particules.css";

const Particles = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${Math.random() * 98}vw`;
      particle.style.animationDuration = `${Math.random() * 5 + 4}s`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 7000);
    };

    const interval = setInterval(createParticle, 75);
    return () => clearInterval(interval);
  }, []);
  return <div className="particles-background" />;
};

export default Particles;
