import React from 'react';
import './Goods.less';

import logo from '@Assets/images/logo.jpg'
import SupportMenu from '@Components/SupportMenu/SupportMenu';
import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header';
import mock from '@Helpers/MockGoods';
import Good from '@Components/Good/Good';

function GoodsList() {
    const list = [];
    for (let i = 0; i < 2; i++){
        list.push(<Good className='good' key={i} 
        title={mock[i]['title']}
        description={mock[i]['description']}
        price={mock[i]['price']}
        avaliable={mock[i]['avaliable']}/>);
    }
    return (<div className='goods-inner'>{list}</div>);
}

const Goods = () => (
    <div>
        <Header className='navbar'/> 
        <div className='main'>
        <SupportMenu className='supportMenu'/>
        <div className="main-page">
        <div className="main-container">
        <div className='goods'>
            <GoodsList/>
        </div>
    </div></div>
    </div>
    <Footer/>
    </div>
);

export default Goods;
