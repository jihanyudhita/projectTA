import API from '../services/api'
import {Alert} from 'react-native';

export default {
    Login: (params) => {
        return dispatch => {
            API.Login(params)
                .then((response) => {
                    console.log('login', response)
                    if(response.status == 1){
                        return dispatch({type: 'LOGIN', response});
                    } else {
                        Alert.alert(
                            '',
                            'Login gagal, silahkan hubungi pengelola untuk di konfirmasi !',
                            [
                              {text: 'OK', onPress: () => null},
                            ],
                            {cancelable: false},
                        );
                    }                    
                }).catch((error) => {
                    console.log('error login',error)
                })
        }
    },

    Register: (params) => {
        return dispatch => {
            API.Register(params)
                .then((response) => {
                    return dispatch({type: 'REGISTER', response});
                }).catch((error) => {
                    console.log('error register',error)
                })
        }
    },

    updateProfile: (params) => {
        console.log('params', params)
        return dispatch => {
            API.updateProfile(params)
                .then((response) => {
                    console.log('update user', response)
                    return dispatch({type: 'UPDATE_USER', response});
                }).catch((error) => {
                    console.log('error login',error)
                })
        }
    },

    getPengeluaran: (params) => { //nama orang
        return dispatch => {
            API.getPengeluaran(params) //aksi yg dilakukan
                .then((response) => {
                    console.log ('respon_pengeluaran', response)
                    return dispatch({type: 'GET_PENGELUARAN', response}); //ditampung data nya di reducer
                }).catch((error) => {
                    console.log('error pengeluaran', error)
                })
        }
    },
}