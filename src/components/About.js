import React from "react"

import pro from '../assets/images/hanadi.jpg';

const About = () => {
  const [header] = React.useState({
   
    
      
      imgSrc: pro,
     
    } );
  
 
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">About Me</h1> <br/> 
          <img className="image"src={ header.imgSrc}  alt={header.imgSrc} />
          
          <p className="mainContent">I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me . </p>
          <br/> <br/> <h3 className="mainHeader">Work With Me</h3>
                        
                        <span className="mainContent1" role="img" aria-label="right pointer"> Email Address: hsabarnah@gmail.com </span> 
                        <br/> <br/>
                             
                            
                            
                            <span className="mainContent1" role="img" aria-label="right pointer">  Phone No. +972  597621673</span> 
                            <br/> <br/> 

                            <a href="https://drive.google.com/file/d/1iN5QKkstuxL-5Z1q3a2PN_eMRi2tP_uZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                            <span  className="mainContent1">   Resume </span> 
                             
                            </a>
          
        </div>
   
      </div>
    </div>
  );
};

export default About;
