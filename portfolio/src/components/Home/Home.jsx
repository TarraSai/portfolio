import React from "react";
import "./home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Bio ,StreamlineDownloadCircleSolid,SkillIconsLinkedin,SimpleIconsCodechef,BytesizeGithub
  ,CibLeetcode
} from "../../Userdata";

export default function Into() {
  const scrollstyle = {
    display: "flex",
    alignItems: "center",
    JustifyContent: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "#EEF7FF",
    postion:"relative"
  };
  const [text] = useTypewriter({
    words: [Bio.role],
    loop: {},
    typeSpeed: 100,
  });
  return (
    
    <div style={scrollstyle}>
      <div className="container">
        <div className="row  ">
          <div class="col-md-6 order-2 order-md-1 ">
            <div className="home-content">
              <h1>Hi,</h1>
              <h1>
                I'am <span>Sai Tarra</span>
              </h1>
              <h2>
                I am
                <span style={{ fontWeight: "bold", color: "#5356FF" }}>
                  {text}
                </span>
                <span>
                  <Cursor />
                </span>
              </h2>
              <p>
                I am a dedicated and skilled MERN stack developer, specializing
                in creating dynamic and responsive web applications. My passion
                for learning new technologies drives me to continuously improve
                and stay updated with the latest industry trends. I take pride
                in delivering high-quality solutions that exceed clients'
                expectations. My commitment to excellence and ability to adapt
                quickly make me a valuable contributor to any team or project.
              </p>
              <div className="home-content-icons">
              <SkillIconsLinkedin width="33" height="33" />
              <SimpleIconsCodechef width="33" height="33" fill="brown" className="codechef"/>
              <BytesizeGithub width="33" height="33"/>
              <CibLeetcode width="33" height="33" className="leetcode"/>
              <a href={Bio.image} download="panda_image" >Resume <StreamlineDownloadCircleSolid width="22" height="22" fill="blue" /></a>
              
              </div>
            </div>
            
          </div>
          <div class="col-md-6 order-1 order-md-2 ">
            <div className="container p-5">
              <div className="circle-container">
                <div className="circle-ring"></div>
                <img
                  src={Bio.image}
                  alt={Bio.image}
                  className="circle-image "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
