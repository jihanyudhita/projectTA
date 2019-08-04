import React from 'react';
import {Actions} from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { StyleSheet,  View, FlatList, SafeAreaView, Image, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Button, Header, Left, Body, Right, Icon, Picker} from 'native-base'
import { connect } from 'react-redux';
import action from '../actions';
import Modal from 'react-native-modalbox';

class ProfilAnak extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show: false,
            show2: false,
            picked: false,
            data: [2019],
            modal: false,
            detailData: '',
            bulan: [ 
                {
                    nama_bulan :"Januari"
                },
                {
                    nama_bulan :"Februari"
                },
                {
                    nama_bulan :"Maret"
                },
                {
                    nama_bulan :"April"
                },
                {
                    nama_bulan :"Mei"
                },
                {
                    nama_bulan :"Juni"
                },
                {
                    nama_bulan :"Juli"
                },
                {
                    nama_bulan :"Agustus"
                },
                {
                    nama_bulan :"September"
                },
                {
                    nama_bulan :"Oktober"
                },
                {
                    nama_bulan :"November"
                },
                {
                    nama_bulan :"Desember"
                }],
        }
    }

    componentWillMount(){
        // if(!this.props.isLoggedIn){
        //     Actions.login()
        // }
    }

    componentDidMount(){
        console.log('profile', this.props)        
    }

    render() {
        return(
            <View style={{width: '100%', height:'100%'}}>
                <Modal backButtonClose={true} isOpen={this.state.modal} onClosed={()=>this.setState({modal:false})} position='center' 
                    style={{width: '80%', height: 300, justifyContent: 'center'}}>
                        {
                            this.props.data ? this.props.data.response.role == 'anak_kos' ? 
                            <View style={{width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center'}}>
                                <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>Transaksi telah dibayarkan pada:</Text>
                                <Text style={{marginTop: 10, fontSize: 15, alignSelf:'center'}}>{this.state.detailData ? this.state.detailData[0].waktu_pembayaran : '0000-00-00'} </Text>
                            </View>
                            :
                            <View style={{width: '100%', paddingVertical: 20, backgroundColor: 'white'}}>
                                <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf:'center'}}>Detail Transaksi</Text>
                                <View style={{marginTop: 15, width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
                                    <Text style={{fontSize: 15}}>Sampah</Text>
                                    <Text>Rp {this.state.detailData ? this.state.detailData[0].sampah : '0'}</Text>
                                </View>
                                <View style={{marginTop: 10, width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
                                    <Text style={{fontSize: 15}}>Internet</Text>
                                    <Text>Rp {this.state.detailData ? this.state.detailData[0].internet : '0'}</Text>
                                </View>
                                <View style={{marginTop: 10, width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
                                    <Text style={{fontSize: 15}}>Listrik</Text>
                                    <Text>Rp {this.state.detailData ? this.state.detailData[0].listrik : '0'}</Text>
                                </View>
                                <View style={{marginTop: 10, width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
                                    <Text style={{fontSize: 15}}>Kerusakan</Text>
                                    <Text>Rp {this.state.detailData ? this.state.detailData[0].kerusakan : '0'}</Text>
                                </View>
                                <View style={{marginTop: 10, width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
                                    <Text style={{fontSize: 15}}></Text>
                                    <Text style={{fontSize: 15}}>Total : Rp {parseInt(this.state.detailData ? this.state.detailData[0].sampah : '0')+parseInt(this.state.detailData ? this.state.detailData[0].internet : '0')+
                                        parseInt(this.state.detailData ? this.state.detailData[0].listrik : '0')+parseInt(this.state.detailData ? this.state.detailData[0].kerusakan : '0')}</Text>
                                </View>
                            </View>
                            : null
                        }
                </Modal>
                <ScrollView style={{flex:1}}>
                    <View style={{width: '100%', height: 40, justifyContent: 'center', backgroundColor: 'white'}}>
                        <Text style={{alignSelf: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                            Srikandi
                        </Text>
                    </View>
                    <View style={{backgroundColor: 'white', flexDirection: "row", alignItems:'center'}}>
                        <Image style={{resizeMode: 'contain', width: "40%", height: "40%"}} source={require('../assets/girl.jpg')}/>
                        <View style={{flexDirection: "column", alignSelf: "flex-start", marginTop: 20, marginLeft: 8, marginBottom:20}}>
                            <Text style={{fontSize: 15, color: 'black', alignSelf: 'center'}}>{this.props.data ? this.props.data.response.nama : 'Admin'}</Text>
                            <TouchableOpacity onPress={()=>Actions.editprofil()} style={{ width: 100, padding:10, justifyContent:'center'}}>
                                <Text style={{marginTop: 10, fontSize: 15, color:'black', alignSelf:'center'}}>edit profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>this.setState({ show: !this.state.show})} style={{flexDirection:'row', alignItems: 'center', width:'100%', height:40, justifyContent:'center', backgroundColor:'rgb(2,98,148)'}}>
                        <View style={{width: '50%', justifyContent: 'center'}}>
                            <Text style={{ alignSelf:'flex-end', color:'white', fontSize:18}}>Profile</Text>
                        </View>
                        <View style={{width: '50%', justifyContent: 'center'}}>
                            {
                                !this.state.show ? 
                                <Icon name='chevron-small-down' type='Entypo' style={{width:60, height:30, position:'absolute', right:5, color: 'white' }} />    
                                :
                                <Icon name='chevron-small-up' type='Entypo' style={{width:60, height:30, position:'absolute', right:5, color: 'white' }} />        
                            }                            
                        </View>
                    </TouchableOpacity>
                    {
                        !this.state.show ? null:                    
                    <KeyboardAvoidingView>                        
                        <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 15, color: '#808080'}}>Full Name</Text>
                            <Text style={{fontSize: 15, color: 'black'}}>{this.props.data ? this.props.data.response.nama:'No Name'}</Text>
                        </View>
                        {/* <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 15, color: '#808080'}}>Nick Name</Text>
                            <Text style={{fontSize: 15, color: 'black'}}>Jihan</Text>
                        </View> */}
                        <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 15, color: '#808080'}}>Email</Text>
                            <Text style={{fontSize: 15, color: 'black'}}>{this.props.data ? this.props.data.response.email:'default@gmail.com'}</Text>
                        </View>
                        <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 15, color: '#808080'}}>Phone Number</Text>
                            <Text style={{fontSize: 15, color: 'black'}}>+62 - {this.props.data ? this.props.data.response.no_hp:'000000'}</Text>
                        </View>
                        {/* <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 15, color: '#808080'}}>Username</Text>
                            <Text style={{fontSize: 15, color: 'black'}}>jihanyudhita</Text>
                        </View> */}
                        <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 15, color: '#808080'}}>Gender</Text>
                            <Text style={{fontSize: 15, color: 'black'}}>{this.props.data ? this.props.data.response.gender == 'p' ? "Perempuan":"Laki - Laki":'Tidak diketahui'}</Text>
                        </View>
                        
                    </KeyboardAvoidingView>    
                    }
                    {
                        !this.props.data ? 
                        null :
                        this.props.data.response.role == 'pemilik' ? null : 
                        <TouchableOpacity onPress={()=>this.setState({ show2: !this.state.show2})} style={{flexDirection:'row', alignItems: 'center', width:'100%', height:40, justifyContent:'center', backgroundColor:'rgb(2,98,148)'}}>
                            <View style={{width: '50%', justifyContent: 'center'}}>
                                <Text style={{ alignSelf:'flex-end', color:'white', fontSize:18}}>Transaksi</Text>
                            </View>
                            <View style={{width: '50%', justifyContent: 'center'}}>
                                {
                                    !this.state.show2 ? 
                                    <Icon name='chevron-small-down' type='Entypo' style={{width:60, height:30, position:'absolute', right:5, color: 'white' }} />    
                                    :
                                    <Icon name='chevron-small-up' type='Entypo' style={{width:60, height:30, position:'absolute', right:5, color: 'white' }} />        
                                }                            
                            </View>
                        </TouchableOpacity>
                    }  
                         
                    {
                        !this.state.show2 ? null:     
                        <ModalDropdown style={{width: '40%', height: 40, justifyContent:'center', alignItems:'center', alignSelf:'center', backgroundColor:'#e0e0e0'}}                        
                        animated
                        dropdownStyle={{marginTop:-8, width:100, alignSelf:'center'}}
                           options={this.state.data}
                           onSelect={(idx, value) => this._pickerd(value)}/>               
                    // <TouchableOpacity onPress={()=>this.setState({ show3: !this.state.show3})}>
                    //     <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'space-between'}}>
                    //         <Text style={{alignItems: 'center', fontSize: 15, color: 'black', alignItems: 'center'}}>2017</Text>
                    //     </View>
                    //     <View style={{width: '50%', justifyContent: 'center'}}>
                    //         {
                    //             !this.state.show3 ? 
                    //             <Icon name='chevron-small-down' type='Entypo' style={{width:60, height:30, position:'absolute', right:5, color: 'black' }} />    
                    //             :
                    //             <Icon name='chevron-small-up' type='Entypo' style={{width:60, height:30, position:'absolute', right:5, color: 'black' }} />        
                    //         }                            
                    //     </View>
                    // </TouchableOpacity>
                    }   
                    {
                        !this.state.picked ? null :
                        <FlatList 
                            horizontal
                            style={{ width:'90%', height:200, alignSelf:'center'}}
                            data={this.state.bulan}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                        />
                    }            
                </ScrollView>
                {
                    !this.props.isLoggedIn ? 
                    <Button style={{width: '90%', borderRadius:5, position: 'absolute', bottom: 5, height: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, backgroundColor: 'rgb(2,98,148)'}}
                        onPress={()=> Actions.login()}
                    >
                        <Text style={{fontSize: 15, color: 'white', alignSelf: 'center'}}>Login</Text>
                    </Button>
                    : 
                    <Button style={{width: '90%', borderRadius:5, position: 'absolute', bottom: 5, height: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, backgroundColor: 'rgb(2,98,148)'}}
                        onPress={()=> this._logout()}
                    >
                        <Text style={{fontSize: 15, color: 'white', alignSelf: 'center'}}>Log Out</Text>
                    </Button>
                }                
            </View>            
        );
    }

    _logout = () => {
        this.props.dispatch({ type: 'RESET_LOGIN' });
        Actions.login()
    }

    _pickerd = (value) => {
        this.setState({ picked: value})
        if(this.props.data ? this.props.data.response.role == 'anak_kos' : 'anak_kos'){
            const params = {
                id_user: this.props.data.response.id_user,
                tahun: value
            }
            this.props.dispatch(action.payment.getHistoryPembayaran(params))
        }
        else if(this.props.data ? this.props.data.response.role == 'pengelola' : 'pengelola'){
            const params = {
                id_kos: this.props.data.response.id_kos,
                tahun: '2019',
                bulan: ''
            }
            this.props.dispatch(action.auth.getPengeluaran(params))
        }
        else {
            const params = {
                id_kos: this.props.data.response.id_kos,
                tahun: '2019',
                bulan: ''
            }
            this.props.dispatch(action.auth.getPengeluaran(params))
        }
    }

    _keyExtractor = (item, index) => item.nama_bulan;

    _renderItem = ({item, index}) => {
        var a = []
        if(this.props.data ? this.props.data.response.role == 'anak_kos' : 'anak_kos'){
            a = this.props.history_payment_anak.filter((val)=>{
                return val.bulan == index +1
            })
        } else if(this.props.data ? this.props.data.response.role == 'pengelola' : 'pengelola'){
            a = this.props.dataPengeluaran.filter((val)=>{
                return val.bulan == index +1
            })
        }
        else {
            a = this.props.dataPengeluaran.filter((val)=>{
                return val.bulan == index +1
            })
        }
        return (
            <TouchableOpacity onPress={()=> a.length ? this._sendData(index) : null} style={{ width: 150, height:50, marginLeft:10, marginTop:10, backgroundColor: a.length ? "green":"red", borderRadius:5, justifyContent:'center'}}>
                <Text style={{ color:'#FFF', fontSize:15, alignSelf:'center'}}>{item.nama_bulan}</Text>
            </TouchableOpacity>
        )
    }

    _sendData = (index) => {
        var a = []
        if(this.props.data ? this.props.data.response.role == 'anak_kos' : 'anak_kos'){
            a = this.props.history_payment_anak.filter((val)=>{
                return val.bulan == index +1
            })
        } else if(this.props.data ? this.props.data.response.role == 'pengelola' : 'pengelola'){
            a = this.props.dataPengeluaran.filter((val)=>{
                return val.bulan == index +1
            })
        }
        else {
            a = this.props.dataPengeluaran.filter((val)=>{
                return val.bulan == index +1
            })
        }
    
    this.setState({
        modal: true,
        detailData: a
    })
    }
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    }, 
    text: {
      alignSelf: 'center',
      color: 'pink',
      fontSize: 30
    } 
});

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
    data: state.data,
    history_payment_anak: state.history_payment_anak,
    dataPengeluaran: state.dataPengeluaran
})

export default connect(mapStateToProps)(ProfilAnak);