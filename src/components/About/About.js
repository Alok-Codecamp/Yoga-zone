import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className=" about">

            <div className="img d-flex justify-content-evenly">
                <img src="https://photos.tpn.to/go/ko/jg/sp/653x490.jpg" alt="" className="w-100" />
                <div className="ms-5">
                    <h2>BookYogaTeacherTraining</h2>
                    <p>
                        BookYogaTeacherTraining is made with love by Tripaneer.
                        The Tripaneer journey started in 2013 with a passion for travel.
                        To date, we’re a startup team of
                        200+ creative problems solvers, tech wizards, and passionate travelers,
                        working from the Tripaneer offices in Amsterdam and around the world.
                        We’re leading the charge in bringing the global travel experience industry
                        online. Although we are continuously growing since 2013, our core motivations remain the same,
                        and we’re proud of our friendly, start-up culture.
                    </p>
                </div>
            </div>
            <div className="text d-flex justify-content-evenly mt-5">
                <img src="https://s3.us-east-2.amazonaws.com/statics.tpn.to/about/about-globe.jpeg" alt="" className="w-50" />
                <div className="ms-5">
                    <h3>Who we are</h3>
                    <p> Yoga Nidra is a form of guided meditation that has gained popularity over the past few years.

                        Also known as “yogic sleep”, Yoga Nidra is aimed to achieve
                        deep physical, emotional, and mental relaxation.
                        For that, you’ll go inwards and become aware
                        of every part of your body. After one Nidra session,
                        you’ll experience more relaxation than you would
                        with any other type of yoga!
                        Sounds like a yoga style you’d like to try and possibly teach
                        to others? Everyone can practice it, but if you want to be introduced to this fascinating
                        style by experienced teachers and surrounded by beautiful landscapes, there’s a great selection of
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About;