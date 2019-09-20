const Transaction = {
    data: [
        {id: 1, transaction: 'Security doors', date: '16 jun 2014', amount: '483,00'},
        {id: 2, transaction: 'Wardrobes', date: '12 jun 2014', amount: '327,00'},
        {id: 3, transaction: 'Set of tuls', date: '10 jun 2014', amount: '125,00'},
        {id: 4, transaction: 'Ponoramic pictures', date: '07 jun 2014', amount: '344,00'},
        {id: 5, transaction: 'Phones', date: '01 jun 2014', amount: '235,00'},
        {id: 6, transaction: 'Monitors', date: '29 may 2014', amount: '100,00'}
    ]
};

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