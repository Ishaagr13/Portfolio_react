import React from "react";
import "../Experience/Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="expeience_details">
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="expeience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="expeience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="expeience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                {" "}
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="expeience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
              <h4>SpringBoot</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>
            <article className="expeience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>  
                <h4>Spring Core</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="expeience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>  
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="expeience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div> 
                <h4>POstgresSql</h4>
                <small className="text-light">Intermediate</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
