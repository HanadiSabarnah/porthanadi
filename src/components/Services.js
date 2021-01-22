import React,{useEffect,useState} from "react"
import sanityClient from "../client.js"

import imageUrlBuilder from "@sanity/image-url"
import { SocialIcon } from "react-social-icons"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
    return builder.image(source)
}
const Services = () => {
  const [projectData,setProjectData] = useState(null);
    useEffect(()=>{
        sanityClient
        .fetch(`
        *[_type == "project"]{
            title,
            date,            
            description,
            projectType,
            link,
            link1,
            tags ,
            "projectImage": mainImage.asset->url      
                       
        }`)
        .then((data)=>setProjectData(data))
        .catch(console.error)
    },[]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">Welcome To My Projects </h3>
           
          </div>

          <div className="row bgMain" >
          {projectData && projectData.map((project,index)=>(
              <div className="col-4 bgMain"  >
                <div className="services__box">
                  {/* {info.icon}  */}
                  <div className="services__box-header">{project.title}</div>
                  <img className="image2" src={urlFor(project.projectImage).url()} alt="project.projectImage"  />
                  <br/><br/>
                  <div className="services__box-p">{project.description}</div>
                  <br/><br/>View  Code{" "}
                  <SocialIcon url={project.link}  />
                  <br/><br/> View Demo{" "}
                  <SocialIcon url={project.link1}  />
                  

                            
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
