import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import { Button, Header, Left, Body, Right, Icon, Picker} from 'native-base'
import ModalDropdown from 'react-native-modal-dropdown';
import { connect } from 'react-redux';
import action from '../actions';
import Modal from 'react-native-modalbox';

class DetailAnak extends React.Component {
    state={
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
            example: [
                {
                    id_pembayaran: "4",
                    id_user: "14",
                    bulan: "5",
                    tahun: "2019",
                    waktu_pembayaran: "2019-05-23 06:16:48",
                    konfirmasi: "1"
                },
                {
                    id_pembayaran: "4",
                    id_user: "14",
                    bulan: "6",
                    tahun: "2019",
                    waktu_pembayaran: "2019-05-23 06:16:48",
                    konfirmasi: "1"
                }
            ]
    }

    componentDidMount(){
        console.log('did', this.props)
    }

    render(){
        return(
            <View style={{ backgroundColor:'#fff', flex:1}}>
                <Modal backButtonClose={true} isOpen={this.state.modal} onClosed={()=>this.setState({modal: false})} position='center' style={{width: '80%', height: 200}}>
                    <View style={{width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>Transaksi telah dibayarkan pada:</Text>
                        <Text style={{marginTop: 10, fontSize: 15, alignSelf:'center'}}>{this.state.detailData ? this.state.detailData[0].waktu_pembayaran : '0000-00-00'} </Text>
                    </View>
                </Modal>
                <ScrollView style={{flex:1}}>
                    <View style={{width: '100%', height: 40, justifyContent: 'center', backgroundColor: 'white'}}>
                        <Text style={{alignSelf: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                            Srikandi
                        </Text>
                    </View>
                    <View style={{backgroundColor: 'white', flexDirection: "row", alignItems:'center'}}>
                        <Image style={{resizeMode: 'contain', width: "35%", height: 100}} source={require('../assets/girl.jpg')}/>
                        <View style={{flexDirection: "column", alignSelf: "flex-start", marginTop: 20, marginLeft: 8, marginBottom:20}}>
                            <Text style={{fontSize: 15, color: 'black', alignSelf: 'center'}}>{this.props.datas ? this.props.datas.nama : 'Admin'}</Text>                            
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
                                <Text style={{fontSize: 15, color: 'black'}}>{this.props.datas ? this.props.datas.nama:'No Name'}</Text>
                            </View>
                            <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 15, color: '#808080'}}>Email</Text>
                                <Text style={{fontSize: 15, color: 'black'}}>{this.props.datas ? this.props.datas.email:'default@gmail.com'}</Text>
                            </View>
                            <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 15, color: '#808080'}}>Phone Number</Text>
                                <Text style={{fontSize: 15, color: 'black'}}>+62 - {this.props.datas ? this.props.datas.no_hp:'000000'}</Text>
                            </View>
                            <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 15, color: '#808080'}}>Gender</Text>
                                <Text style={{fontSize: 15, color: 'black'}}>{this.props.datas ? this.props.datas.gender == 'p' ? "Perempuan":"Laki - Laki":'Tidak diketahui'}</Text>
                            </View>                            
                        </KeyboardAvoidingView>    
                    } 
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
                    {
                        !this.state.show2 ? null:     
                        <ModalDropdown style={{width: '40%', height: 40, justifyContent:'center', alignItems:'center', alignSelf:'center', backgroundColor:'#e0e0e0'}}                        
                        animated
                        dropdownStyle={{marginTop:-8, width:100, alignSelf:'center'}}
                           options={this.state.data}
                           onSelect={(idx, value) => this._pickerd(value)}/>  
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
            </View>
        )
    }

    _pickerd = (value) => {
        this.setState({ picked: value})
        const params = {
            id_user: this.props.datas.id_user,
            tahun: value
        }
        this.props.dispatch(action.payment.getHistoryPembayaran(params))
    }

    _keyExtractor = (item, index) => item.nama_bulan;

    _renderItem = ({item, index}) => {
        const a = this.props.history_payment_anak.filter((val)=>{
            return val.bulan == index +1
        })
        return (
            <TouchableOpacity onPress={()=> a.length ? this._sendData(index) : null} style={{ width: 150, height:50, marginLeft:10, marginTop:10, backgroundColor: a.length ? "green":"red", borderRadius:5, justifyContent:'center'}}>
                <Text style={{ color:'#FFF', fontSize:15, alignSelf:'center'}}>{item.nama_bulan}</Text>
            </TouchableOpacity>
        )
    }

    _sendData = (index) => {
        const a = this.props.history_payment_anak.filter((val)=>{
            return val.bulan == index +1
        })
        this.setState({
            modal: true,
            detailData: a
        })
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
    data: state.data,
    history_payment_anak: state.history_payment_anak
})

export default connect(mapStateToProps)(DetailAnak);
