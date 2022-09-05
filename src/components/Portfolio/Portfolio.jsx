import React from "react";

import Data from './Data';

import './Portfolio.scss';

const Portfolio = () => {
    return (
        <section className="portfolio section grid" id="#portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>

            <div className="portfolio__container container">
                <div className="portfolio__content">
                    {Data.map((item) => (
                        <div className="portfolio__data" key={item.id}>
                            <div className="portfolio__img">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="portfolio__card__content">
                                <div className="portfolio__info">
                                    <h3 className="portfolio__title">
                                        {item.name}
                                    </h3>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="button--flex button--small portfolio__button">
                                        Demo
                                        <i className="uil uil-arrow-right portfolio__info-icon"></i>
                                    </a>
                                </div>
                                <div className="portfolio__github">
                                    <a
                                        href={item.link_github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="button--flex button--small portfolio__button">
                                        <i className="uil uil-github portfolio__github-icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
