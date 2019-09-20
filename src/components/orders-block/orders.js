import React, { Component } from 'react';
import './order.css';
import image from './graph1.jpg';

// создаю функциональный компонент, чтобы в цикле деструктурировать объект
//  с данными и отобразить все данные на экране

const Order = ({data}) => {

    const element = data.map((items) => {
        const { id, number, description, percent} = items;
        return (
            <li key={id}>
                <div className='order-number'>{number}</div>
                <div className='order-desc-perc'>
                    <div className='order-description'>{description}</div>
                    <div className='order-percent'>{percent}</div>
                </div>
            </li>
        )
    });

    return (
        <div className='order'>
            <div className='order-head'>
                <div className='order-header'>Orders</div>
                <div className='btn-group'>
                    <button className="f-btn btn">Today</button>
                    <button className="s-btn btn">Monthly</button>
                    <button className="t-btn btn">Annual</button>
                </div>
            </div>
            <div className='order-body'>
                <img className='order-img' src={image} alt='order image'></img>
                <ul className="graph">
                    { element }
                </ul>
            </div>
        </div>
    )
};

class OrderContainer extends Component {

    // делаю захардкодженный стейт с данными, которые потом выведу в UI

    state = {
        dataGraph1: [
            {id: 1, number: '2,346', description: 'Total orders in period', percent: '48%'},
            {id: 2, number: '4,422', description: 'Orders in last mont', percent: '60%'},
            {id: 3, number: '9,180', description: 'Mounthly income from orders', percent: '22%'}
        ]
    }

    render() {

        // отрисовка компонента
        return (
            <div>
                <Order data={this.state.dataGraph1} />
            </div>

        )
    }
}

export default OrderContainer;