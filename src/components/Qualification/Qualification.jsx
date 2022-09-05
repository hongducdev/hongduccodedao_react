import React, { useState } from "react";

import './Qualification.scss';

const Qualification = () => {

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggle === 1
                                ? "qualification__button button--flex qualification__active"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div
                        className={
                            toggle === 2
                                ? "qualification__button button--flex qualification__active"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>
            </div>

            <div className="qualification__sections">
                <div
                    className={
                        toggle === 1
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                    }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Web Developer
                            </h3>
                            <span className="qualification__subtitle"></span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
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
                            <h3 className="qualification__title">
                                Study at ICTU
                            </h3>
                            <span className="qualification__subtitle"></span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2020 - Present
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        toggle === 2
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                    }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Front-end
                            </h3>
                            <span className="qualification__subtitle"></span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
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
                            <h3 className="qualification__title">Discord.js</h3>
                            <span className="qualification__subtitle"></span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
