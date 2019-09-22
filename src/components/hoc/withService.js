import React from 'react';
import { ServiceContextConsumer } from '../service-context/withServiceContext';

// create high order component and create context 
// so that all component have access to data

const withService = () => (Wrapped) => {
    return (props) => {
        return (
            <ServiceContextConsumer>
                {
                    (dataService) => {
                        return (
                            <Wrapped {...props} dataService={dataService} />
                        )
                    }
                }
            </ServiceContextConsumer> 
        )
    }
}

export default withService;