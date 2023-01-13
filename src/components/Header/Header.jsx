import React from "react";
import './Header.less'
import logo from '@Assets/images/logo.jpg';
import cart from '@Assets/images/cart.png';
import user from '@Assets/images/user.png';

const Header = () => (
    <div>
        <div class="nav">
        <img src={logo} class="brand-logo" alt=""/>
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Поиск по каталогу: "/>
                <button class="search-btn">поиск</button>
            </div>
            <a href="#"><img src={user} alt=""/></a>
            <a href="#"><img src={cart} alt=""/></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">главная</a></li>
        <li class="link-item"><a href="#" class="link">о компании</a></li>
        <li class="link-item"><a href="#" class="link">товары и услуги</a></li>
        <li class="link-item"><a href="#" class="link">доставка и оплата</a></li>
        <li class="link-item"><a href="#" class="link">контакты</a></li>
    </ul>
    </div>
);

export default Header;