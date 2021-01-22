

import React from "react"

import { SocialIcon } from "react-social-icons"

const Banner = () => {
  const [state] = React.useState({
    title: "Hanadi Sabarnah",
    text1:
      "Software Developer.",
      text2:
      "“I'm not a great programmer; I'm just a good programmer with great habits.”",
  });
  
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
              <h1>{state.title}</h1>
                <h2><b>{state.text1}</b></h2>
                <h2><b> {state.text2}</b></h2>
                <br/>  <br/>
                <ul className="contactCircles">
                
         
                <li>
                <SocialIcon url="https://github.com/HanadiSabarnah?tab=repositories"  />
                </li>
               
                <li>
                <SocialIcon url="https://www.linkedin.com/in/hanadi-sabarnah-a477971b6/"  />
                </li>
              </ul>

             

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Banner;
