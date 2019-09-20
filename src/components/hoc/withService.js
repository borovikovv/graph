import React from 'react';
import { ServiceContextConsumer } from '../service-context/withServiceContext';

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