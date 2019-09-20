import React, { Component } from 'react';
import './user-project-list.css';

const UserProjectList = ({data}) => {

    const userProject = data.map((item) => {
        const {id, status, data, user, value} = item;
        return (
            <li className='user-project-body' key={id}>
                <span>{status}</span>
                <span>{data}</span>
                <span>{user}</span>
                <span className='table-value'>{value}</span>        
            </li>
        )
    });

    return (
        <div className="user-project">
            <h3 className='user-project-table-header'>User project list</h3>
            <div className="user-project-table">
                <div className='user-project-head'>
                    <span>Status</span>
                    <span>Data</span>
                    <span>User</span>
                    <span>Value</span>
                </div>
                <ul>
                    { userProject }
                </ul>
            </div>      
        </div>
    );
};

class UserProjectListContainer extends Component {

    state = {
        userProject: [
            {id: 1, status: 'pending...', data: '11:20pm', user: 'Samanta', value: '24%'},
            {id: 2, status: 'pending...', data: '10:40am', user: 'Monica', value: '66%'},
            {id: 3, status: 'pending...', data: '01:30pm', user: 'John', value: '54%'},
            {id: 4, status: 'pending...', data: '02:20pm', user: 'Agnes', value: '12%'},
            {id: 5, status: 'pending...', data: '04:10am', user: 'Amelia', value: '66%'},
            {id: 6, status: 'pending...', data: '12:08pm', user: 'Damian', value: '23%'}
        ]
    }
    render() {
        return(
            <UserProjectList data={this.state.userProject} />
        );
    }
}

export default UserProjectListContainer;