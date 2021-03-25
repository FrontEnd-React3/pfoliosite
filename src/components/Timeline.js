import React, { useState } from "react";
import "../styles/Timeline.css";
import me from "../images/class.jpg";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 167) : text}
      {console.log(text.length)}
      {console.log("text" + text)}
      {isReadMore ? text.length > 150 : ""}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? (
          <div className="e6cont ">
            <div className="effect6 ">
              <FaPlus></FaPlus>
            </div>
          </div>
        ) : (
          <div className="e6cont ">
            <div className="effect6 ">
              <FaMinus></FaMinus>
            </div>
          </div>
        )}
        {isReadMore ? "... PLEASE CLICK +" : ""}
      </span>
    </p>
  );
};
function timeline() {
  return (
    <div className="containerbg">
      <div id="experience" className="background-alt">
        <h2 className="heading">Experience</h2>
        <p> please hover the images</p>
        <div className="container">
          <div className="timeline">
            <div className="timeline-container">
              <div className="hovercontainer">
                <img className="classpicwrap shadow-about" src={me} alt="me" />
              </div>
              <div className="clastextwrap">
                <div className="timeline-bodyprim">
                  <div className="timeline-title">
                    <span className="badge">Web Dev Instructor</span>
                  </div>
                  <h6>A React love affair</h6>
                  <ReadMore>
                    Teaching adults to become a web developer. Being their
                    companion and motivation to obtain this highly appreciated
                    skill. The course has been developed by myself and is
                    React-orientated. <br/> <br/><h6>Programme</h6>{" "}
                    <div className="programme">
                      <ul>
                        <li>GIT</li>
                        <li>CSS/SAAS</li>
                        <li>Grid/FlexBox</li>
                        <li>Bootstrap</li> <li>Some PHP/Mysql</li>
                        <li> Jquery</li>
                        <li> Node</li>
                        <li> Javascript</li>
                        <li>React using Context</li>
                        <li> Ui/ux design libraries (Material design)</li>
                      </ul>
                    </div>
                    Having a graphice designer background myself obliges my
                    students to have a sexy result, it is mainly a Front-End
                    I am proud when students find a job during of soon after my course.  <br/><br/>
                    <h6>Time-off Studies</h6>
                    <ul className="programme">
                    <li> Headless CMS Sanity.io.</li>
                    <li> Coding better.</li>
                    </ul>
                  </ReadMore>
                  <p className="timeline-subtitle">July 2018 - present day</p>
                </div>
              </div>
            </div>





            <div className="timeline-container danger">
              <div className="timeline-icon">
                <i className="far fa-grin-hearts"></i>
              </div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Danger</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </p>
                <p className="timeline-subtitle">2 Hours Ago</p>
              </div>
            </div>
            <div className="timeline-container success">
              <div className="timeline-icon">
                <i className="far fa-grin-tears"></i>
              </div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Success</span>
                </h4>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </p>
                <p className="timeline-subtitle">6 Hours Ago</p>
              </div>
            </div>
            <div className="timeline-container warning">
              <div className="timeline-icon">
                <i className="far fa-grimace"></i>
              </div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Warning</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </p>
                <p className="timeline-subtitle">1 Day Ago</p>
              </div>
            </div>
            <div className="timeline-container">
              <div className="timeline-icon">
                <i className="far fa-grin-beam-sweat"></i>
              </div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Secondary</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </p>
                <p className="timeline-subtitle">3 Days Ago</p>
              </div>
            </div>
            <div className="timeline-container info">
              <div className="timeline-icon">
                <i className="far fa-grin"></i>
              </div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Info</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </p>
                <p className="timeline-subtitle">4 Days Ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default timeline;
