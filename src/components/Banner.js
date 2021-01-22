

import React,{useEffect,useState} from "react"
import sanityClient from "../client.js"
import { SocialIcon } from "react-social-icons"

// import imageUrlBuilder from "@sanity/image-url"


import BlockContent from "@sanity/block-content-to-react"

const Banner = () => {
  const [author,setAuthor] = useState(null)

    useEffect(()=>{
        sanityClient
        .fetch(`
        *[_type == "author"]{
            name,
            bio,            
            "authorImage": image.asset->url
                       
        }`)
        .then((data)=>setAuthor(data[0]))
        .catch(console.error)
    },[]);

    if(!author) return <div>Loading....</div>
  
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1> {author.name}</h1>
                <h2><b> Software Developer</b></h2>
                <h2><b> <BlockContent blocks={author.bio} projectId="9drzfsju" dataset="production" /></b></h2>
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
