import React, { Component } from 'react';
import './header.css';

// create functional component 

const Header = ({data}) => {

    const element = data.map((items) => {
        const {id, text, mark, number, describes, percent} = items;
        return (
            <div key={id} className='header'>
                <div className='header-type'>
                        <h3 className='header-type-h'>{text}</h3>
                        <span className='header-type-marks marks'>{mark}</span>
                </div>
                <span className='header-numbers'>{number}</span>
                <div className='header-info'>
                    <span className='header-info-describes'>{describes}</span>
                    <span className='header-info-describes'>{percent}</span>
                </div>
            </div>
        )
    });
    return (
        <li className='header-element'>
            { element }
        </li>
    )

};

class HeaderContainer extends Component {

    // create hard code state

    state = {
        dataInfo: [
            {id: 1, text: 'Income', mark: 'Mountly', number: '40 886,200', describes: 'Total income', percent: '98%'},
            {id: 2, text: 'Orders', mark: 'Annual', number: '275,800', describes: 'New orders', percent: '20%'},
            {id: 3, text: 'Visits', mark: 'Today', number: '106,120', describes: 'New visits', percent: '44%'},
            {id: 4, text: 'User activity', mark: 'Low value', number: '80,600', describes: 'In first mount', percent: '38%'}
            ]
        };

        // render and show component

    render() {
        return (
            <ul>
                <Header data={ this.state.dataInfo } />
            </ul>
        )
    }
}

export default HeaderContainer;