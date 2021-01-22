import React from "react"
import pro1 from '../assets/images/sparkles.jpg';
import pro2 from '../assets/images/books.jpg';
 import pro3 from '../assets/images/Sky Scanner.png';

import { SocialIcon } from "react-social-icons"



const Services = () => {
  
  const [state] = React.useState([
    {
      id: 1,
      icon1: <SocialIcon url="https://github.com/HanadiSabarnah/pythons"/>,
      icon2: <SocialIcon url="https://drive.google.com/file/d/15Re3FH6tEj5p0kCnVFDwGnIZfCFynkfJ/view"/>,
      heading: "Sparkles",
      imgSrc: pro1,
      text:
        "A web app. For HackReactor - Team project (Role: Frontend), A website where you can book cleaning services, buy cleaning products, and add or check cleaning tips provided by others.. Technology Used : React (Redux ,Hooks , React Router), Python (Django) Authentication (JWT, Bcrypt),Database (mongoDB).",
    },
    {
      id: 2,
      icon1: <SocialIcon url="https://github.com/HanadiSabarnah/mvp"/>,
      icon2: <SocialIcon url="https://drive.google.com/file/d/1CC2hk-Pe7XSth8iYwK-Qu3tjGBogSvat/view"/>,
      heading: "My library",
      imgSrc: pro2,
      text:
        "MERN Stack For HackReactor - solo project (Role: Full-Stack), allow the users to add books in list contain the name of book ,the author, category of books, and the rate of book. also the user user can delate or edit. Technology Used : react , express , mongodb.",
    },
    {
      id: 3,
      icon1: <SocialIcon url="https://github.com/HanadiSabarnah/Falcons-skyscanner"/>,
      icon2: <SocialIcon url="https://falcons-scanner.herokuapp.com/"/>,
      heading: "Sky Scanner",
      imgSrc: pro3,
      text:
        "A web app. For HackReactor - Team project (Role: Frontend), allow the users to search about their travel flights, from anywhere to anywhere.. Technology Used : react+jquery mongodb||Atlas express+nodejs.",
    },
    
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">Welcome To My Projects </h3>
           
          </div>

          <div className="row bgMain" >
          {state.map((info,i) => (
              <div className="col-4 bgMain" key={i}  >
                <div className="services__box">
                  {/* {info.icon}  */}
                  <div className="services__box-header">{info.heading}</div>
                  <img className="image2" src={info.imgSrc} alt="project.projectImage"  />
                  <br/><br/>
                  <div className="services__box-p">{info.text}</div>
                  <br/><br/>View  Code{" "}
                  {info.icon1}
                  <br/><br/> View Demo{" "}
                  {info.icon2}
                  

                            
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
