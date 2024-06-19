import React from 'react';
import "./Contact.css"

const Contact = () => {

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title" id="title">Contact</h2>
        <span className='section__subtitle'>Let's Connect</span>

        <div className="contact__container container grid">
            <div className="contact__content">

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">vyshnavidevipriya@gmail.com</span>

                        <a href="mailto:vyshnavidevipriya@gmail.com" target="_blank" className="contact__button" rel='noreferrer'>
                            Write me{" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">+91- 9346599088</span> <br />

                        <a href="https://api.whatsapp.com/send?phone=9346599088&text=Hello, we want to know about more information!" target="_blank" rel="noreferrer" className="contact__button">
                            Write me{" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-linkedin contact__card-icon"></i>

                        <h3 className="contact__card-title">LinkedIn</h3>

                        <a href="https://www.linkedin.com/in/VyshnaviKamineni/" target="_blank" rel="noreferrer" id="linkedin"className="contact__button">
                            Write me{" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact