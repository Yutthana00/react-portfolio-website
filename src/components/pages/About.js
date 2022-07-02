import React from 'react';
import me from "./images/yutthana_image1.png"
import { FaMdb, FaCss3, FaGithub, FaHtml5, FaJs, FaNodeJs, FaNpm, FaReact } from 'react-icons/fa';

export default function About() {
  return (
    <>
    <div>
      
      <center>
      <h1 style={{textAlign:"center"}}>Yutthana Thapdit</h1>

         <img id="profileimg" src={me} alt='Profile picture'></img></center>

         <p id='profileText'>

            Hello World! I am Yutthana, a Full Stack Developer. I am a naturally curious person which makes me want to always learn new things, a problem-solver who questions everything, a hard worker who doesnt take life as it comes, on top of that, I like to enjoys the little things in life.
            
         </p>

         <h2 style={{textAlign:"center"}}>Languages I Speak:</h2>

         <FaReact className='react-icons' /> React.js
         <FaJs className='react-icons' /> JavaScript
         <FaMdb className='react-icons' /> MongoDB
         <FaHtml5 className='react-icons' /> HTML5
         <FaNodeJs className='react-icons' /> Node.js
         <FaCss3 className='react-icons' /> CSS3
         <FaGithub className='react-icons'/> Github
         <FaNpm className='react-icons' /> NPM

         
         
      </div>
    </>
  );
}
