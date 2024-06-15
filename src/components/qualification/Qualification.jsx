import React, {useState} from 'react'
import "./Qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title" id="education">Education and Experience</h2>
        <span className='section__subtitle' id="personal">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"}
                    onClick = {() => toggleTab(1)}>
                    <i className='uil uil-graduation-cap qualification__icon'></i>
                    <strong>Qualification</strong>
                </div>

                <div className={
                    toggleState === 2 
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"}
                    onClick = {() => toggleTab(2)}>
                    <i className='uil uil-briefcase-alt qualification__icon'></i>
                    <strong>Experience</strong>
                </div>
            </div>


            <div className="qualification__sections">
                {/* QUALIFICATION SECTION */}
                <div className={toggleState === 1 ? "qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title"><strong>B.Tech</strong></h3>
                            <span className='qualification__subtitle'>Tirumala Engineering College - Guntur</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> Jun 2017 - July 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div id="intermediate" >
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className='qualification__subtitle'>Chaitanya Junior College - Guntur</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> Jun 2015 - Mar 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">SSC</h3>
                            <span className='qualification__subtitle'>S S Z P H S - Guntur</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> Jun 2014 - Apr 2015
                            </div>
                        </div>
                    </div>
                </div>

                {/* EXPERIENCE SECTION */}
                <div className={toggleState === 2 ? "qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div id="software">
                            <h3 className="qualification__title">Software Engineer</h3>
                            <span className='qualification__subtitle'>LTIMindtree - Chennai</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> Jan 2022 - Dec 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Associate Software Trainee</h3>
                            <span className='qualification__subtitle'>LTIMindtree - Chennai</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> Oct 2021 - Jan 2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Qualification