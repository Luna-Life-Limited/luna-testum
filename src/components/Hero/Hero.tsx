import "./Hero.css";

import logoImg from "./Logo.png";
import backgroundImg from "./heroBackground.png";

export function Hero() {
  return (
    <div
      className="Hero"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="LogoContainer">
        <img className="logo" src={logoImg} alt="Logo" />
      </div>
      <div className="HeroContent">
        <h1>A safe space for girls to learn and grow 🚀</h1>
        <h2>
          Ask questions, learn about topics that matter to you and track your
          emotions
        </h2>
      </div>
    </div>
  );
}
