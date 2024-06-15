import React from 'react';
import './Testimonals.css';

const Testimonials = () => {
    return (
        <section className="testimonials section" id="testimonals">
            <h2 className="section__tit" id="title">Testimonials</h2>
            <span className="section__subtit" id="subtitle">What people say about me</span>

            <div className="testimonials__container container">
                <div className="testimonial">
                    <p className="testimonial__text">"The project we both worked on was the same. Her technical skills on UI are impressive. She is very curious about learning new things, and she is helpful by nature. She always committed to her work and uses her technical expertise efficiently."</p>
                    <div className="testimonial__author">
                        <img src="/testimonals/Mohana.jpg" alt="Person 1" className="testimonial__img" />
                        <h3 className="testimonial__name">Mohana Lakshmi</h3>
                    </div>
                </div>

                <div className="testimonial">
                    <p className="testimonial__text">"Vyshnavi is the most profound person I have met. Her determination and thoughtfulness are unprecedented and inspiring. She has a knack for solving any problem, no matter how complicated it looks. In all honesty, Vyshnavi would be a great fit for any company."</p>
                    <div className="testimonial__author">
                        <img src="/testimonals/Manohar.jpg" alt="Person 2" className="testimonial__img" />
                        <h3 className="testimonial__name">Manohar Sai</h3>
                    </div>
                </div>

                <div className="testimonial">
                    <p className="testimonial__text">"Vyshnavi is a hardworking professional with a smart mind who likes to accomplish his tasks on time. Her greatest strength would be her ability to adapt and be creative. She is always curious to learn about the latest technologies that the market needs most."</p>
                    <div className="testimonial__author">
                        <img src="/testimonals/Raviteja.jpg" alt="Person 3" className="testimonial__img" />
                        <h3 className="testimonial__name">Ravi Teja</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
