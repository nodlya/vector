import './SupportMenu.less'
import React from 'react';
import categories from '@Helpers/Categories';

function CategoriesList(){
    const list = [];
    for (let i = 0; i < Object.keys(categories).length; i++){
        list.push(<a>{categories[i]}</a>);
    }
    return (<div className='categories-list'>{list}</div>);
}

const SupportMenu = () => (
    <div className='supportMenu'>
        <div className='support-flex'>
            <input className="find-box" autoComplete="off" placeholder="Поиск по каталогу: " type="search"/>
            <button className="find-btn">поиск</button>
        </div>
        <CategoriesList/>
    </div>
);

export default SupportMenu;