import './SupportMenu.less'
import React from 'react';

const SupportMenu = () => (
    <div className='supportMenu'>
        <div className='support-flex'>
            <input className="find-box" autoComplete="off" placeholder="Поиск по каталогу: " type="search"/>
            <button className="find-btn">поиск</button>
        </div>
    </div>
);

export default SupportMenu;