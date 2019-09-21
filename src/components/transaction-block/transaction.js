import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import './transaction.css';
import withService from '../hoc/withService';
import Spinner from './../spinner/spinner';
import { dataLoaded, dataRequested } from './../../actions/actions';
import MapContainer from './../map/map';

const TransactionBlock = ({data = {}, loading}) => {

    // make spinner when didn't have data 
    if(loading){
        return <Spinner className='trans-block' />;
    }

    // show data with Redux
    const transactionData = data.map((item) => {

        const {id, transaction, date, amount} = item;
        return (
            <li className='trans-table' key={id}>
                <span className='trans-table-item'>{id}</span>
                <span className='trans-table-item'>{transaction}</span>
                <span className='trans-table-item'>{date}</span>
                <span className='trans-table-amount marks'>{amount}</span>        
            </li>
        )
    });

    return (
        <div className='trans-block'>
            <h3 className='trans-header'>Transactions worldwide</h3>
            <div className='trans-body'>
                <div className='trans-table-header'>
                    <span className='trans-number'>No.</span>
                    <span className='trans-transaction'>Transactions</span>
                    <span className='trans-date'>Date</span>
                    <span className='trans-amount'>Amount</span>
                </div>
                <ul>
                    { transactionData }
                </ul>
                <div className='map-container'>
                    <MapContainer />
                </div>
            </div>
        </div>
    )
};

class TransactionBlockContainer extends Component {
    
    // in this place I will loading data with my service
    componentDidMount() {
        const { dataLoaded,    
                dataRequested,
                dataService } = this.props;
            dataRequested()
            dataService.getData()
            .then((data) => dataLoaded(data));
    }

    render() {
        const { loading, transactionData } = this.props;

        return (
            <TransactionBlock loading={loading} data={transactionData}  />
        )
    }
}
    // get data in Redux store
const mapStateToProps = ({loading, transactionData}) => {
    return {
        loading,
        transactionData
    }
}
    // get actions
const mapDispatchToProps = {
    dataLoaded,
    dataRequested
}

    // connect React + Redux
export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(TransactionBlockContainer);