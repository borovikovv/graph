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