import API from '../services/api'

export default {
    getDataKos: (params) => {
        console.log('params', params)
        return dispatch => {
            API.getDataKos(params)
                .then((response) => {
                    console.log('data kos', response)
                    return dispatch({type: 'DATA_KOS', response});
                }).catch((error) => {
                    console.log('error login',error)
                })
        }
    },

    getAnakPerKos: (params) => {
        console.log('params', params)
        return dispatch => {
            API.getAnakPerKos(params)
                .then((response) => {
                    console.log('data anak per kos', response)
                    return dispatch({type: 'DATA_ANAK_PER_KOS', response});
                }).catch((error) => {
                    console.log('error login',error)
                })
        }
    },

    getAnakKos: (params) => {
        console.log('params', params)
        return dispatch => {
            API.getAnakKos(params)
                .then((response) => {
                    console.log('data anak per kos', response)
                    return dispatch({type: 'DATA_ANAK_KOS', response});
                }).catch((error) => {
                    console.log('error login',error)
                })
        }
    },
}