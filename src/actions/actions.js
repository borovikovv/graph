const dataLoaded = (payload) => {
    return {
        type: 'DATA_LOADED',
        action: payload
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