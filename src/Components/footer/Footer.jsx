import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'> Andrés </h1>
                <ul className='footer__list'>
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className='footer__link'>Testimonials</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://discord.gg/PgCjXaUA" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-discord"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/brayan-andr%C3%A9s-medina-correa/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/branmeco" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-github"></i>
                    </a>
                </div>
                <span className='footer__copy'>Crypticalcoder. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer