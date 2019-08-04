const INIT_STATE = {
    data: false,
    isLoggedIn : false,
    baner: false,
    update_user: false,
    anak_bayar: false,
    data_kos: [],
    data_anak_per_kos: [],
    data_anak_kos: [],
    history_payment_anak: [],
    register: false,
    registerMsg: [],
    financing: [],
    dataPengeluaran: [],
}

const reducers = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'RESET_STATUS' :
            return {
                ...state,
                update_user: false,
            }
        case 'RESET' :
            return {
                ...state,
                baner: false, data_kos: [],
                data_anak_per_kos: [],
                dataPengeluaran: []
            } 
        case 'RESET_PENGELUARAN' :
            return {
                ...state,
                dataPengeluaran: []
            }
        case 'RESET_DATA_ANAK' :
            return {
                ...state,
                data_anak_per_kos: [],
                data_anak_kos: []
            } 
        case 'RESET_LOGIN' :
            return {
                ...state,
                data: false,
                isLoggedIn : false,
            } 
        case 'HISTORY_ANAK_BAYAR' :
            return {
                ...state,
                history_payment_anak: action.response
            }
        case 'DATA_ANAK_PER_KOS' :
            return {
                ...state,
                data_anak_per_kos: action.response
            }
        case 'DATA_ANAK_KOS' :
            return {
                ...state,
                data_anak_kos: action.response
            }
        case 'DATA_KOS' :
            return {
                ...state,
                data_kos: action.response
            }
        case 'ANAK_BAYAR' :
            return {
                ...state,
                anak_bayar: action.response
            }
        case 'LOGIN' :
            return {
                ...state,
                isLoggedIn : true,
                data: action
            }
        case 'REGISTER' :
            return {
                ...state,
                register : true,
                registerMsg: action
            }
        case 'BANER' :
            return {
                ...state,
                baner: action
            }
        case 'UPDATE_USER' :
            return {
                ...state,
                update_user: true
            }
        case 'FINANCING' :
            return {
                ...state,
                financing: action.response
            }
        case 'GET_PENGELUARAN' :
            return {
                ...state,
                dataPengeluaran: action.response
            }
        default : 
            return state;
    }
}

export default reducers;