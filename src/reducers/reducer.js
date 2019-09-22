const reducer = (state, action) => {
    if(state === undefined) {
        return {
            transactionData: [],
            loading: false
        };
    }
    // loaded data with redux store
    switch(action.type){
        case 'DATA_LOADED':
            return {
                loading: false,
                transactionData: action.payload
            };

        // when component expect data show spinner
        case 'DATA_REQUESTED':
            return {
                loading: true
            };

        default:
            return state;
    }
};
export default reducer;