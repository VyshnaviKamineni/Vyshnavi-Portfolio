import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <p>Explore My Technical Level</p>

        
        <div className="skills-grid">
          <div className="skill-category frontend">
            <h3>Scripting Languages</h3>
            <ul>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>HTML5</span><span className="skill-level"><strong>Advanced</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>CSS3</span><span className="skill-level"><strong>Advanced</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>JavaScript</span><span className="skill-level"><strong>Advanced</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>jQuery</span><span className="skill-level"><strong>Moderate</strong></span></li>
            </ul>
          </div>
          <div className="skill-category tools">
            <h3>FrameWork & Libraries</h3>
            <ul>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>React JS</span><span className="skill-level"><strong>Advanced</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>Redux</span><span className="skill-level"><strong>Moderate</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>Node JS</span><span className="skill-level"><strong>Basic</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>BootStrap</span><span className="skill-level"><strong>Moderate</strong></span></li>
            </ul>
          </div>
          <div className="skill-category technical">
            <h3>Tools</h3>
            <ul>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>Git/Github</span><span className="skill-level"><strong>Advanced</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>VS Code</span><span className="skill-level"><strong>Advanced</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>JIRA</span><span className="skill-level"><strong>Moderate</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>Jest</span><span className="skill-level"><strong>Basic</strong></span></li>
            </ul>
          </div>
          <div className="skill-category other">
            <h3>Other Expertise</h3>
            <ul>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>AEM 6.5</span><span className="skill-level"><strong>Moderate</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>OOPS</span><span className="skill-level"><strong>Moderate</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>Python</span><span className="skill-level"><strong>Moderate</strong></span></li>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>DBMS</span><span className="skill-level"><strong>Basic</strong></span></li>
            </ul>
          </div>
          <div className="skill-category other">
            <h3>Hosting Platforms</h3>
            <ul>
              <li><span className="skill-name"><i class='bx bx-badge-check'></i>Github Pages</span><span className="skill-level"><strong>Moderate</strong></span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;