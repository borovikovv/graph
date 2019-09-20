import React, { Component, Fragment } from 'react';
import './message.css';

// создаю функциональный компонент, чтобы в цикле деструктурировать объект
//  с данными и отобразить все данные на экране

const Message = ({data}) => {

    const element = data.map((items) => {
        const {id, name, text, info, time} = items;
        return (
            <li className='message-person' key={id}>
                <div className='message-name-time'>
                    <h3 className='message-name'>{name}</h3>
                    <span className='message-time'>{time}</span>
                </div>
                <span className='message-text'>{text}</span>
                <span className='message-text-info'>{info}</span>
            </li>
        )
    });
// отправляю все данные в классовый компонент
    return (
        <Fragment>
            <h4 className='message-header'>Messages</h4>
            <div className='new-message'>
                <h2 className='message-info'>New messages</h2>
                <span className='message-detail'>
                    You have 22 new messages and 16 waiting in draft folder.
                </span>
            </div>
            <ul className='message-element'>
                { element }
            </ul>
        </Fragment>
    )

};

class MessageContainer extends Component {

    // делаю захардкодженный стейт с данными, которые потом выведу в UI

    state = {
        messageData: [
            {id: 1, name: 'Monica Smith', 
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            info: 'Today 5:60 pm - 12.06.2019', time: '1m ago'},
            {id: 2, name: 'John Angel', 
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            info: 'Today 5:60 pm - 12.06.2019', time: '3m ago'},
            {id: 3, name: 'Jesica Ocean', 
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            info: 'Today 5:60 pm - 12.06.2019', time: '6m ago'},
            {id: 4, name: 'Monica Jackson', 
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            info: 'Today 5:60 pm - 12.06.2019', time: '15m ago'},
            {id: 5, name: 'Anna Legand', 
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            info: 'Today 5:60 pm - 12.06.2019', time: '25m ago'},
            {id: 6, name: 'Damiak Novan', 
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            info: 'Today 5:60 pm - 12.06.2019', time: '1h ago'},
            {id: 7, name: 'Garry Smith', 
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            info: 'Today 5:60 pm - 12.06.2019', time: '3h ago'}

            ]
        };

        // отрисовка компонента, передача данных в функциональный
        // компонент

    render() {
        return (
            <div className='message'>
                <Message data={ this.state.messageData } />
            </div>
        )
    }
}

export default MessageContainer;