import React from 'react';

// create provider and consumer data context

const {
    Provider: ServiceContextProvider,
    Consumer: ServiceContextConsumer
} = React.createContext();

export {
  ServiceContextProvider,
  ServiceContextConsumer
};