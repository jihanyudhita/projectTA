import API from '../services/api'

export default {
    anakBayar: (params) => {
        console.log('params', params)
        return dispatch => {
            API.anakBayar(params)
                .then((response) => {
                    console.log('anak bayar', response)
                    return dispatch({type: 'ANAK_BAYAR', response});
                }).catch((error) => {
                    console.log('error login',error)
                })
        }
    },

    getHistoryPembayaran: (params) => {
        console.log('params', params)
        return dispatch => {
            API.getHistoryPembayaran(params)
                .then((response) => {
                    console.log('history anak bayar', response)
                    return dispatch({type: 'HISTORY_ANAK_BAYAR', response});
                }).catch((error) => {
                    console.log('error login',error)
                })
        }
    },

    Financing: (params) => {
        console.log('params', params)
        return dispatch => {
            API.Financing(params)
                .then((response) => {
                    return dispatch({type: 'FINANCING', response});
                }).catch((error) => {
                    console.log('error login',error)
                })
        }
    },
}