import React from 'react'
import "./Project.css"

const WorkItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <div className='work__buttons'>
        <a href={item.demo} className="work__button" target="_blank" rel='noreferrer'>
            Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
        <a href={item.repo} className="work__button" target="_blank" rel='noreferrer'>
            Repo <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
        </div>
    </div>
  )
}

export default WorkItems