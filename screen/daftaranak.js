import React from 'react';
import {Actions} from 'react-native-router-flux';
import { StyleSheet, Dimensions, View, TextInput, SafeAreaView, Image, Text, 
         ActivityIndicator, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Header, Left, Body, Right, Icon} from 'native-base'
import { connect } from 'react-redux';
import Modal from 'react-native-modalbox';
import actions from '../actions';

class DaftarAnak extends React.Component {

    constructor(props){
        super(props);
        this.state={
            loading: true,
            modalOpen : false,
            kostSelected: '',
            dataKos: [],
            anakPerKos: [],
            anakKos: [],
            role: 'anak kos'
        }
    }

    componentDidMount(){
        console.log('zz', this.props)
        this.props.dispatch(actions.list.getDataKos())
        this.props.dispatch(actions.list.getAnakKos(this.props.data.response.id_kos))
    }

    componentWillReceiveProps(props){
        console.log('tt', props)
        if(props.data_kos){
            this.setState({
                loading: false,
                dataKos: props.data_kos,
                                
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

  render() {
    return (
    <View style={{width: '100%', height:'100%', backgroundColor: 'white'}}>
        <Modal backButtonClose={true} style={{ padding: 10, backgroundColor:'#FFF' }} isOpen={this.state.modalOpen} 
            onClosed={()=> this.setState({ modalOpen: false})} position='top'>
            <View style={{ width:'100%', justifyContent:'center' }}>
                <Text style={{ fontSize: 18, alignSelf:'center'}}>Pilih kos terlebih dahulu</Text>
                {
                    this.state.dataKos.map((val, index)=> {
                        return(
                            <TouchableOpacity onPress={()=> this._pickKost(val)}  style={{ width:'100%', backgroundColor: index % 2 == 0 ? 'grey':'#FFF', padding:10}}>
                                <Text style={{ fontSize:16, fontWeight:'400', color:'#000'}}>{val.nama_kos}</Text>
                            </TouchableOpacity>
                        )                            
                    })
                }
            </View>
        </Modal>
        {
            this.state.loading ? 
            <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size='large' color='green' />
            </View>
            :
            <View style={{ marginTop:10, width:'90%', alignSelf:'center', justifyContent:'center', }}>
                {
                    this.state.role != 'pemilik' ? null :
                    <TouchableOpacity onPress={()=> this.setState({ modalOpen: true })} style={styles.container}>
                        <Text style={{ alignSelf:'center', fontSize: 16}}>{this.state.kostSelected == '' ? 'Pilih berdasarkan kos':this.state.kostSelected.nama_kos}</Text>
                        <Icon name='search' type='FontAwesome' style={{color: 'rgb(2,98,148)'}}/>
                    </TouchableOpacity>
                }
                
                <ScrollView style={{ marginTop:10}}>
                    <View>
                        <FlatList
                            data={this.state.role=='pemilik' ? this.state.anakPerKos : this.state.anakKos}
                            extraData={this.state}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                        />
                    </View>
                </ScrollView>                
            </View>
        }        
    </View>
    )
  }

  _keyExtractor = (item, index) => item.id_user;

  _renderItem = ({item}) => (
    <TouchableOpacity onPress={()=> Actions.detailAnak({ datas: item })} style={{ flexDirection: "row", marginBottom:15, justifyContent:'space-between'}}>
        <Image style={{ resizeMode: 'contain', width: "40%", height: 200}} source={require('../assets/girl.png')}/>
        <View style={{flexDirection: "column", width:'60%', alignSelf: "center", marginTop: 10, marginBottom:10}}>
            <Text style={{fontSize: 25, color: 'black', alignSelf: 'center'}}>{item.nama}</Text>
            <Text style={{fontSize: 15, color: 'black', alignSelf: 'center'}}>{item.email}</Text>
        </View>
    </TouchableOpacity>
  );
  
  _pickKost = (item) => {
    this.setState({
        kostSelected: item,
        modalOpen: false,
        loading: true
    })
    this.props.dispatch(actions.list.getAnakPerKos({id_kos: item.id_kos}))
  }
};

const styles = StyleSheet.create({
    container: {
        padding: 10, 
        justifyContent:'space-between', 
        alignContent:'center', 
        flexDirection: 'row', 
        width: '100%', 
        height: 50,
        borderWidth:1,

        //shadow
        //   elevation: 0.5,
        borderColor: 'rgba(46, 50, 132, 0.15)',
        shadowColor: 'rgba(46, 50, 132, 0.15)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 4,      
    },
  });

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
    data: state.data,
    data_kos: state.data_kos,
    data_anak_per_kos: state.data_anak_per_kos,
    data_anak_kos: state.data_anak_kos
})

export default connect(mapStateToProps)(DaftarAnak);
