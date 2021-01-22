import React from "react";
import pro1 from '../assets/images/my-goals.jpg';
import pro2 from '../assets/images/download.png';


const Prices = () => {
  
  const [state] = React.useState([
    {
      id: 1,
      heading: "My Goals",
      image : pro1,
     
      msg1: "Life goals are one of the most important reasons of accomplish and success . So if you now what you need in your life , what you planning to be or to have that's mean that you are in the right path.     For my I have a lot of goals that I want to achieve within 5 years, 1st goal is to be a successful software engineer, to have my own business, to own a car and a house with beautiful garden around.To reach my goals I invest in my self and try my best to work hard in this cohort. Also I am trying to improve my soft skills and self awareness.Goal-setting theory draws on the concept that our conscious ideas guide our actions",
      
    },
    {
      id: 2,
      heading: "This vs That in JavaScript",
      image : pro2,
      
     
      msg1: "This:- is belong to the object that it refer to and it may be different in different calling of function .- it has different value depending on the mode it is used at (strict mode: refer to an object .while in non strict mode: it can refer to any value).- it is used on OOP for creating Classes function.That :- It is not a keyword it is just a name of variable.",
    },
   
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">Welcome To My Bloges</h1>
          {/* <p className="mainContent">{header.text}</p> */}
          {/* <div className="commonBorder"></div> */}
        </div>
        <div className="row">
        {state.map((info,i) => (
            <div className="col-4" key={i}>
              <div className="price">
                <div className="priceHeading">{info.heading}</div>
                <img className="image3" src={info.image} alt="project.projectImage"  />
               
                <ul>
                  <li>{info.msg1}</li>
                 
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
