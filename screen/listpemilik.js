import React from 'react';
import {Actions} from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { StyleSheet,  View, Picker, FlatList, Image, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Button, Header, Left, Body, Right, Icon} from 'native-base'
import {connect} from 'react-redux'
import actions from '../actions'

class ListPemilik extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show: false,
            show2: false,
            picked: false,
            data: ['Kos Putri Srikandi 1',
            'Kos Putri Srikandi 2',
            'Kos Putri Srikandi 3',
            'Kos Putri Srikandi 4',
            'Kos Putri Srikandi 5',
            'Kos Putri Srikandi 6'],
            selectedValue: '',
            selectedAnakKos: '',
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
                anakPerKos: ''
        }
    }

    componentDidMount (){
        this.props.dispatch(actions.list.getDataKos())
    }

    componentWillReceiveProps (props){
        console.log('kos', props)
        if(props.data_kos){
            this.setState({
                data: props.data_kos
            })
        }
        if(props.data_anak_per_kos){
            this.setState({
                anakPerKos: props.data_anak_per_kos
            })
        }

        if(props.data_anak_kos){
            this.setState({
                anakKos : props.data_anak_kos
            })
        }
    }
    
    // componentDidUpdate (){
    //     if(this.props.dataPengeluaran){
    //         setTimeout(() => {
    //             this.props.dispatch({type:'RESET'})
    //         }, 100);
    //     }
    // }

    render() {
        console.log('meldy', this.state.anakPerKos)
        return(
            <View style={{width: '100%', height:'100%'}}>
                <ScrollView style={{flex:1}}>
                    <View style={{width: '100%', height: 40, justifyContent: 'center', backgroundColor: 'white'}}>
                        <Text style={{alignSelf: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                            Srikandi
                        </Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.setState({ show: !this.state.show})} style={{flexDirection:'row', alignItems: 'center', width:'100%', height:40, justifyContent:'center', backgroundColor:'rgb(2,98,148)'}}>
                        <View style={{width: '50%', justifyContent: 'center'}}>
                            <Text style={{ alignSelf:'flex-end', color:'white', fontSize:18}}>Daftar Kos</Text>
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
                        <Picker style={{width: '40%', height: 40, justifyContent:'center', alignItems:'center', alignSelf:'center', backgroundColor:'#e0e0e0'}}                                                                        
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) => 
                                { 
                                    this.setState({ language: itemValue, selectedValue: itemValue }) 
                                    this.pengeluaran(this.state.data[itemIndex]) 
                                } 
                        }>
                            <Picker.item label= "Pilih kos" value=''/>
                            { 
                                this.state.data.map((x)=>{ 
                                    return ( 
                                        <Picker.item label={x.nama_kos} value={x.id_kos}/>
                                    ) 
                                }) 
                            } 
                        </Picker>  
                    }         
                    {
                        !this.state.selectedValue ? null :
                        <FlatList 
                            horizontal
                            style={{ width:'90%', height:100, alignSelf:'center'}}
                            data={this.state.bulan}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                        />
                    }
                    <TouchableOpacity onPress={()=>this.setState({ show2: !this.state.show2})} style={{flexDirection:'row', alignItems: 'center', width:'100%', height:40, justifyContent:'center', backgroundColor:'rgb(2,98,148)'}}>
                        <View style={{width: '50%', justifyContent: 'center'}}>
                            <Text style={{ alignSelf:'flex-end', color:'white', fontSize:18}}>Daftar Anak</Text>
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
                        <Picker style={{width: '40%', height: 40, justifyContent:'center', alignItems:'center', alignSelf:'center', backgroundColor:'#e0e0e0'}}                                                                        
                            selectedValue={this.state.dataAnak}
                            onValueChange={(itemValue, itemIndex) => 
                                { 
                                    this.setState({ dataAnak: itemValue }) 
                                    this.pickKost(this.state.data[itemIndex]) 
                                } 
                        }>
                            <Picker.item label= "Pilih kos" value=''/>
                            { 
                                this.state.data.map((x)=>{ 
                                    return ( 
                                        <Picker.item label={x.nama_kos} value={x.id_kos}/>
                                    ) 
                                }) 
                            } 
                        </Picker> 
                    }
                    <View style={{marginTop: 20, width: '90%', maxHeight: '70%', alignSelf: 'center', flex: 1}}>
                            <FlatList 
                                style={{ width:'90%', alignSelf:'center', paddingBottom: '5%'}}
                                data={this.state.anakPerKos}
                                keyExtractor={this._keyExtractors}
                                renderItem={this._renderItems}
                            />                
                    </View>       
                </ScrollView>
            </View>            
        );
    }

    pengeluaran = (value) => {
        console.log('prut', value)
        this.props.dispatch({type:'RESET_PENGELUARAN'})  
        const params = {
            id_kos : value.id_kos,
            tahun : '2019',
            bulan : ''
        }
        console.log ('params', params)
        this.props.dispatch(actions.auth.getPengeluaran(params))
    }

    pickKost = (item) => {
        this.props.dispatch({type:'RESET_DATA_ANAK'})
        this.props.dispatch(actions.list.getAnakPerKos({id_kos: item.id_kos}))
      }

    _keyExtractor = (item, index) => item.id_pengeluaran;

    _keyExtractors = (item, index) => item.id_user;

    _renderItem = ({item, index}) => {
        var a = []
        if(this.props.dataPengeluaran){
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

    _renderItems = ({item}) => (
        <ScrollView>
            <TouchableOpacity onPress={()=> Actions.detailAnak({ datas: item })} style={{ flexDirection: "row", marginBottom: 15, justifyContent:'space-between'}}>
                <Image style={{ resizeMode: 'contain', width: "40%", height: 200}} source={require('../assets/girl.png')}/>
                <View style={{flexDirection: "column", width:'60%', alignSelf: "center", marginTop: 10, marginBottom:10}}>
                    <Text style={{fontSize: 25, color: 'black', alignSelf: 'center'}}>{item.nama}</Text>
                    <Text style={{fontSize: 15, color: 'black', alignSelf: 'center'}}>{item.email}</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
      );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
    data: state.data,
    data_kos: state.data_kos,
    data_anak_per_kos: state.data_anak_per_kos,
    data_anak_kos: state.data_anak_kos,
    dataPengeluaran: state.dataPengeluaran
})

export default connect(mapStateToProps)(ListPemilik);

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