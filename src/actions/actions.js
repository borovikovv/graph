const dataLoaded = (transactionData) => {
    return {
        type: 'DATA_LOADED',
        payload: transactionData
    };
};
const dataRequested = () => {
    return {
        type: 'DATA_REQUESTED'
    };
};

export {
    dataLoaded,
    dataRequested
};