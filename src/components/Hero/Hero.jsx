import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
import{motion} from 'framer-motion'

const Hero = () => {

  const transition={type:'spring',duration:3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
<div className="hero" id='home'>
  <div className="blur hero-blur"></div>
<div className="left-h">
    <Header/>
    {/* the best add */}
    <div className="the-best-ad">
      <motion.div
      initial={{left: mobile? "100px": '120px'}}
      whileInView={{left: '8px'}}
      transition={{...transition, type:'tween'}}
      ></motion.div>
      <span>The Best Fitness Club</span>
      </div> 

      {/* Hero Heading */}
      <div className="hero-text">
        <div>
          <span> Be </span>
          <span className='stroke-text'>Stronger</span>
      </div>
      <div>
        <span>Than your excuses</span>
        </div>
        <div>
          <span>
          you have to believe in yourself when no one else does!
        </span>
          </div>
      </div>
      {/* figures  */}
      <div className="figures">
        <div>
          <span>
            <NumberCounter end={140} start={100} delay='4' preFix="+" />
          </span>
          <span>Expert Coaches</span>
          </div>
        <div>
          <span>
          <NumberCounter end={978} start={800} delay='4' preFix="+" />
          </span>
          <span>Members Joined</span>
          </div>
        <div>
          <span>
          <NumberCounter end={50} start={0} delay='4' preFix="+" />
          </span>
          <span>Fitness Programs</span>
          </div>
      </div>
      {/* hero buttons */}
      <div className="hero-buttons">
        <buttons className="btn">Get Started</buttons>
        <buttons className="btn">Learn More</buttons>
      </div>
     </div>
<div className="right-h">
  <button className="btn">Join Now</button>


  <motion.div
  initial={{right:"-1rem"}}
  whileInView={{right:"4rem"}}
  transition={transition}
   className="heart-rate">
    <img src={Heart} alt="" />
    <span>Heart Rate</span>
    <span>116 BPM</span>
  </motion.div>

  {/* hero images */}
  <img src={hero_image} className="hero-image" alt="" />
  <motion.img 
  initial={{right: '11rem'}}
  whileInView={{right:'22rem'}}
  transition={transition}
  src={hero_image_back} className="hero-image-back" alt="" />
  {/* calories */}
  <motion.div 
   initial={{right:"37rem"}}
   whileInView={{right:"28rem"}}
  transition={transition}
  className="calories">
    <img src={Calories} alt="" />
    <div>
    <span>Calories Burned</span>
    <span>220 kcal</span>
    </div>
    </motion.div>
</div>
</div>
  );
};

export default Hero