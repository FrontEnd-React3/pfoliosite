import React from "react";
import "../styles/Timeline.css";
import me from "../images/class.jpg";

function timeline() {
  return (
    <div className="containerbg">
      <div id="experience" className="background-alt">
        <h2 className="heading">Experience</h2>
        <p> please hover the images</p>
        <div className="container">
          <div className="timeline">
            <div className="timeline-container">
            <div className="e6cont ">
                <div className="effect6 ">+</div></div>
              <div className="hovercontainer">
                <img className="classpicwrap shadow-about" src={me} alt="me" />
              </div>
              <div className="clastextwrap">
                <div className="timeline-bodyprim">
                  <h4 className="timeline-title">
                    <span className="badge">Primary</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam necessitatibus numquam earum ipsa fugiat veniam
                    suscipit, officiis repudiandae, eum recusandae neque
                    dignissimos. Cum fugit laboriosam culpa, repellendus esse
                    commodi deserunt.
                  </p>

                  <p className="timeline-subtitle">1 Hours Ago</p>
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
