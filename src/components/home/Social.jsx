import React from 'react'
import "./Home.css"

const Social = () => {
  return (
    <div className="home__social">
        <a href='https://github.com/VyshnaviKamineni' className='home__social-icon' rel="noreferrer" target="_blank">
            <i class='uil uil-github'></i>
        </a>

        <a href='https://www.linkedin.com/in/VyshnaviKamineni/' className='home__social-icon' rel="noreferrer" target="_blank">
            <i class='uil uil-linkedin'></i>
        </a>
    </div>
  );
}

export default Social