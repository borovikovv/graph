import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ServiceContextProvider } from './components/service-context/withServiceContext';
import App from './components/app/app';
import store from './store';
import Service from './service/service';

const dataService = new Service();


ReactDOM.render(
    <Provider store={store}>
        <ServiceContextProvider value={dataService}>
            <App />
        </ServiceContextProvider>
    </Provider>, 
document.getElementById('root'));
