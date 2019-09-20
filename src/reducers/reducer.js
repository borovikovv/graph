const reducer = (state, action) => {
    if(state === undefined) {
        return {
            transactionData: [],
            loading: false
        };
    }
    switch(action.type){
        case 'DATA_LOADED':
            return {
                loading: false,
                transactionData: action.payload
            };
        case 'DATA_REQUESTED':
            return {
                loading: true
            };

        default:
            return state;
    }
};
export default reducer;

export const fetchTransactionDetails = () => {
    return function(dispatch) {
        return dataService.getData()
            .then((data) => {
                dispatch(dataLoaded(data));
            }
    }
}