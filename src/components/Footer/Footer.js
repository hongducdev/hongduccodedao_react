import React from "react";

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">hongduccodedao</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">
                            Projects
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.instagram.com/pinkduwc._/"
                        className="footer__social-link">
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a
                        href="https://github.com/hongduccodedao"
                        className="footer__social-link">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/hongduccodedao.cf"
                        className="footer__social-link">
                        <i className="uil uil-facebook-f"></i>
                    </a>
                </div>

                <span className="footer__copyright">
                    © 2021 hongduccodedao. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
