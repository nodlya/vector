import React from 'react';
import './index.less';


import logo from '@Assets/images/logo.jpg'
import SupportMenu from '@Components/SupportMenu/SupportMenu';
import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header';

const Main = () => (
    <div>
        <Header className='navbar'/> 
        <div className='main'>
        <SupportMenu className='supportMenu'/>
        <div className="main-page">
        <div className="mainContainer">
        <div className="mainInfo"> 
            <h1 className="companyTitle">О компании ТД Вектор Челябинск</h1> 
            <section className="aboutCompany">
                <div className="aboutCompanyLogo">
                    <img className="aboutCompanyImg" src={logo}/>
                </div>
                <div className="aboutCompanyInfo">
                    <h2 className="aboutCompanyTitle">ТД Вектор</h2>
                    <p className="aboutCompanyDescription">Наша компания специализируется на производстве и продаже плитного материала и поролона в городе Челябинск. Ассортимент в наличии на складе. Доставка по городу и области. Отличное качество продукции. Привлекательные цены. Опыт работы более 10 лет.</p>
                </div>
            </section> 
            <section className="aboutCompany">
                <div className="aboutCompanyText">
                    <h2 className="aboutCompanyTitle">Подробная информация</h2>
                    <p className="aboutCompanyDescription">Наша компания 2 года на рынке по продаже плитного материала и более 10 лет по производству поролона!</p>
                    <p className="aboutCompanyDescription"><strong>В  наличии на складе в Челябинске:</strong></p>
                    <p className="aboutCompanyList">&#9745; Фанера в ассортименте с 3мм-20мм НШ НШ1</p>
                    <p className="aboutCompanyList">&#9745; ДСП и ЛДСП разных размеров и цветов</p>
                    <p className="aboutCompanyList">&#9745; ДВП и ДВПО различных цветов</p>
                    <p className="aboutCompanyDescription">Мы работаем с понедельника по пятницу с 9.00 до 17.00 без обеда. Суббота и воскресенье - выходной.</p>
                    <p className="aboutCompanyDescription"><strong>Делаем доставку по городу и Челябинской области.</strong></p>
                </div>
            </section>
        </div>
    </div></div>
    </div>
    <Footer/>
    </div>
);

export default Main;
