import React from "react";
import './Good.less'
import dsp from '@Assets/images/almostwood.png'
import cart from '@Assets/images/cart.png'

const Good = (props) => (
    <div className="good">
        <img className="first" src={dsp}/>
        <div className="second">
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
        </div>
        <div className="third">
            <p className="price">{props.price}</p>
            <p className="avaliable">{props.avaliable}</p>
            <div className="buttons">
                <button className="i-will-have-order">Заказать</button>
                <img className="bookmark" src={cart}/>
            </div>
        </div>
    </div>
);

export default Good;