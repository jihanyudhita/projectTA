import axios from 'axios';
import {AsyncStorage, Platform} from 'react-native'

const _api = async (url, options = {
    method : 'GET',
    body : {}
}) => {
    const request = {
        baseURL: 'http://mhs.stmikayani.ac.id/jihanyudhita/srikandi-admin/api/',
        method: options.method,
        timeout: 10000,
        url,
        headers: options.head
    };
    if (request.method === 'POST') request.data = options.body;
    const res = await axios(request);
    if (res.status === 200) {
        return res.data;
    } else {
        throw res;
    }
}

export default {
    Login: async (params) => {
        console.log('params api', params)
        return _api('user_login',{
            method: 'POST',
            head: {
                'Content-Type' : 'application/json'
            },
            body: {
                "email" : params.email,
                "password": params.password
            }
        })
    },

    Register: async (params) => {
        console.log('params api', params)
        return _api('user_register',{
            method: 'POST',
            head: {
                'Content-Type' : 'application/json'
            },
            body: {
                "email" : params.email,
                "password": params.password,
                "nama": params.nama,
                "asal": params.asal,
                "no_hp": params.no_hp,
                "gender": params.gender,
                "id_kos" : params.id_kos
            }
        })
    },

    Financing: async (params) => {
        console.log('params api', params)
        return _api('form_pengeluaran',{
            method: 'POST',
            head: {
                'Content-Type' : 'application/json'
            },
            body: {
                "id_kos": params.id_kos,
                "bulan": params.bulan,
                "tahun": params.tahun,
                "sampah": params.sampah,
                "internet": params.internet,
                "listrik": params.listrik,
                "kerusakan": params.kerusakan
            }
        })
    },

    updateProfile: async (params) => {
        console.log('params api', params)
        return _api('user_update/',{
            method: 'POST',
            head: {
                'Content-Type' : 'application/json'
            },
            body: {
                "id_user": params.id_user,
                "email": params.email,
                "password": params.password,
                "nama": params.nama,
                "asal": params.asal,
                "no_hp": params.no_hp,
                "gender": params.gender
            }
        })
    },

    anakBayar: async (params) => {
        return _api('bayar/',{
            method: 'POST',
            head: {
                'Content-Type' : 'application/json'
            },
            body: {
                "id_user": params.id_user,
                "bulan": params.bulan,
                "tahun": params.tahun
            }
        })
    },

    getAnakPerKos: async (params) => {
        return _api('get_users_by_kos/',{
            method: 'POST',
            head: {
                'Content-Type' : 'application/json'
            },
            body: {
                "id_kos": params.id_kos
            }
        })
    },

    getAnakKos: async (params) => {
        return _api('get_users_by_kos/',{
            method: 'POST',
            head: {
                'Content-Type' : 'application/json'
            },
            body: {
                "id_kos": params
            }
        })
    },

    getHistoryPembayaran: async (params) => {
        return _api('get_pembayaran/',{
            method: 'POST',
            head: {
                'Content-Type' : 'application/json'
            },
            body: {
                "id_user": params.id_user,
                "tahun": params.tahun
            }
        })
    },

    getBanner: () => {
        return _api('get_banner/', {
            method: 'GET',
        });
    },

    getDataKos: () => {
        return _api('get_kost/', {
            method: 'GET',
        });
    },

    getPengeluaran: (params) => {
        return _api('get_pengeluaran/' ,{
            method: 'POST',
            head: {
                'Content-Type' : 'application/json'
            },
            body: {
                "id_kos": params.id_kos,
                "tahun": params.tahun,
                "bulan": params.bulan
            }
        })
    }
}