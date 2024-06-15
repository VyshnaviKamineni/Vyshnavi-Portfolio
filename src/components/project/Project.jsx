import React from 'react'
import "./Project.css"
import Works from './Works'

const Project = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title" id="title">Projects</h2>
      <span className="section__subtitle" id="subtitle">What I Build</span>

      <Works/>
    </section>
  )
}

export default Project