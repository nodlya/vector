import React from "react";
import './Footer.less';
import logo from '@Assets/images/logo.jpg';


const Footer = () => (
    <footer>
        <div className="footer-content">
        <img src={logo} className="logo" alt=""/>
        <div className="footer-ul-container">
            <ul className="category">
                <li className="category-title">г.Челябинск, ш.Копейское, 9П</li>
                <li className="category-title"><a href="#">+7 (904) 811-07-91</a></li>
            </ul>
            <ul className="category">
                <li className="category-title">Пн-Пт:9.00-17.00 &nbsp; Сб, Вс: выходной</li>
                <li className="category-title"><a href="#">tdvektor-74@mail.ru</a></li>
            </ul>
        </div>
    </div>
    <div className="footer-social-container">
        <div>
            <a href="#" className="social-link">Доставка и оплата</a>
            <a href="#" className="social-link">Контакты</a>
        </div>
        <div>
            <a href="#" className="social-link">Telegram</a>
            <a href="#" className="social-link">WhatsApp</a>
            <a href="#" className="social-link">Viber</a>
        </div>
    </div>
    <p className="copyright">Copyright © "Квадрат" 2022</p>

    </footer>
);

export default Footer;