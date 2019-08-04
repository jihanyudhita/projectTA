import API from '../services/api'

export default {
    getBanner: (params) => {
        console.log('params', params)
        return dispatch => {
            API.getBanner(params)
                .then((response) => {
                    console.log('baner', response)
                    return dispatch({type: 'BANER', response});
                }).catch((error) => {
                    console.log('error login',error)
                })
        }
    }
}