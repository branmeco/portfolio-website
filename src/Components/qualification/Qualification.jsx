import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <section className="qualification section">
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Systems Engineer</h3>
                                <span className="qualification__subtitle">Huila University Corporation</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2017 - 2022
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Diploma Python Smart Training</h3>
                                <span className="qualification__subtitle">Huila University Corporation</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> March 2022 - May 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Developer Backend</h3>
                                <span className="qualification__subtitle">Muebles El Cedro, Bogotá DC</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> April 2020 - September 2020
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Csm & Technology sas, Neiva</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> Febrary 2022 - June 2022
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification