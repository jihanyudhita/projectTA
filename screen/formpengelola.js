import React from 'react';
import {Actions} from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { StyleSheet, Alert, View, TextInput, Picker, Image, Text, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import {connect} from 'react-redux'
import action from '../actions'
// import { Button, Header, Left, Body, Right, Icon} from 'native-base'

 class FormPengelola extends React.Component {
  constructor(props){
    super(props);
    this.state={
        picked: false,
        data: [
          {
            nama_bulan :"Januari",
            value: '1'
          },
          {
              nama_bulan :"Februari",
              value: '2'
          },
          {
              nama_bulan :"Maret",
              value: '3'
          },
          {
              nama_bulan :"April",
              value: '4'
          },
          {
              nama_bulan :"Mei",
              value: '5'
          },
          {
              nama_bulan :"Juni",
              value: '6'
          },
          {
              nama_bulan :"Juli",
              value: '7'
          },
          {
              nama_bulan :"Agustus",
              value: '8'
          },
          {
              nama_bulan :"September",
              value: '9'
          },
          {
              nama_bulan :"Oktober",
              value: '10'
          },
          {
              nama_bulan :"November",
              value: '11'
          },
          {
              nama_bulan :"Desember",
              value: '12'
          }],
        listrik: '',
        internet: '',
        sampah: '',
        kerusakan: '',
        total: '',
        bulan: '',
    }
}
  componentDidMount(){
    console.log('financing awal', this.props)
  }

  componentWillReceiveProps(params){
    console.log('setelah', params)
    if(params.financing.status == 1){
      Alert.alert(
        '',
        'Pengiriman berhasil !',
        [
          {text: 'OK', onPress: () => Actions.pop()},
        ],
        {cancelable: false},
      );
    }
    else{
      Alert.alert(
        '',
        'Pengiriman gagal karena pembayaran bulan ini telah selesai!',
        [
          {text: 'OK', onPress: () => null},
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    console.log('state', this.state)
    const total_harga = parseInt(this.state.listrik)+parseInt(this.state.internet)+parseInt(this.state.sampah)+parseInt(this.state.kerusakan)
    console.log('total', total_harga)
    return (
      <View style={{flex:1}}>
      {/* <ScrollView style={{flex: 1}}> */}
        <View style={{width: '100%', height: 40, justifyContent: 'center', backgroundColor: 'white'}}>
          <Text style={{alignSelf: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            Srikandi
          </Text>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <View style={{marginTop: 8, width: 50, height: 10, backgroundColor: 'blue'}}/>
          <Text style={{width: 200, fontStyle: 'italic', fontWeight: 'bold', fontSize: 25, color: 'black', marginLeft: 20}}>
            Financing
          </Text>
        </View>
        <View style={{width: '80%', alignSelf: 'center', backgroundColor: 'white', marginTop: '10%'}}>
          <View style={{flexDirection: 'row', width: '100%', height: 20, paddingLeft:10, alignSelf: 'center', marginTop: 15, backgroundColor: 'white', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 15, color: '#808080', backgroundColor: 'transparent', width: '50%'}}>Listrik</Text>
                <TextInput keyboardType='numeric' style={{marginRight: 10, backgroundColor: '#E0E0E0', color: 'black', width: '45%'}}
                    placeholder= 'Rp' placeholderTextColor={'black'}
                onChangeText= {(numeric)=>this.setState({listrik: numeric})}
                >
                </TextInput>
          </View>
          <View style={{flexDirection: 'row', width: '100%', height: 20, paddingLeft:10, alignSelf: 'center', marginTop: 15, backgroundColor: 'white', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 15, color: '#808080', backgroundColor: 'transparent', width: '50%'}}>Internet</Text>
                <TextInput keyboardType='numeric' style={{marginRight: 10, backgroundColor: '#E0E0E0', color: 'black', width: '45%'}}
                    placeholder= 'Rp' placeholderTextColor={'black'}
                onChangeText={(numeric) =>this.setState({internet: numeric})}
                >
                </TextInput>
          </View>
          <View style={{flexDirection: 'row', width: '100%', height: 20, paddingLeft:10, alignSelf: 'center', marginTop: 15, backgroundColor: 'white', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 15, color: '#808080', backgroundColor: 'transparent', width: '50%'}}>Sampah</Text>
                <TextInput keyboardType='numeric' style={{marginRight: 10, backgroundColor: '#E0E0E0', color: 'black', width: '45%'}}
                    placeholder= 'Rp' placeholderTextColor={'black'}
                onChangeText={(numeric) => this.setState({sampah: numeric})}
                >
                </TextInput>
          </View>
          <View style={{flexDirection: 'row', width: '100%', height: 20, paddingLeft:10, alignSelf: 'center', borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 15, backgroundColor: 'white', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 15, color: '#808080', backgroundColor: 'transparent', width: '50%'}}>Biaya Lain:</Text>
          </View>
          <View style={{flexDirection: 'row', width: '100%', height: 20, paddingLeft:10, alignSelf: 'center', marginTop: 15, backgroundColor: 'white', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 15, color: '#808080', backgroundColor: 'transparent', width: '50%'}}>Kerusakan:</Text>
                <TextInput keyboardType='numeric' style={{marginRight: 10, backgroundColor: '#E0E0E0', color: 'black', width: '45%'}}
                    placeholder= 'Rp' placeholderTextColor={'black'}
                onChangeText={(numeric) => this.setState({kerusakan: numeric})}
                >
                </TextInput>
          </View>
          {/* <View style={{flexDirection: 'row', width: '100%', height: 20, paddingLeft:10, alignSelf: 'center', marginTop: 15, backgroundColor: 'white', justifyContent: 'flex-end'}}>
                <Text style={{fontSize: 15, color: '#808080', backgroundColor: 'transparent', fontSize: 12}}>Tambahkan Biaya</Text>
          </View> */}
          <View style={{flexDirection: 'row', width: '100%', height: 20, paddingLeft:10, alignSelf: 'center', marginTop: 15, backgroundColor: 'white', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 15, color: '#808080', backgroundColor: 'transparent', width: '50%'}}>Total</Text>
                {/* <TextInput keyboardType='numeric' style={{marginRight: 10, backgroundColor: '#E0E0E0', color: 'black', width: '45%'}}
                    placeholder= 'Rp' placeholderTextColor={'black'}
                value={total_harga}
                >
                
                </TextInput> */}
                <Text style={{ marginRight:15}}>{Number.isNaN(total_harga) ? "000": total_harga}</Text>
          </View>
          <View style={{flexDirection: 'row', width: '100%', height: 20, paddingLeft:10, alignSelf: 'center', marginTop: 15, backgroundColor: 'white', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15, color: '#808080', backgroundColor: 'transparent', width: '50%'}}>Pilih Bulan:</Text>
            <Picker style={{padding: 15, width: '45%', backgroundColor:'#e0e0e0', fontSize: 15, marginBottom: 15, height: 20, marginRight: 10}}                                                                        
              selectedValue={this.state.bulan}
              onValueChange={(itemValue, itemIndex) => 
                  { 
                      this.setState({ bulan: itemValue }) 
                  } 
              }>
                  { 
                      this.state.data.map((x)=>{ 
                          return ( 
                              <Picker.item label={x.nama_bulan} value={x.value}/>
                          ) 
                      }) 
                  } 
            </Picker>
          </View>
          <TouchableOpacity onPress={()=>this.submit()} style={{marginTop: 25, marginBottom:10, width: '60%', height: 50, alignSelf: 'center', backgroundColor: 'blue', justifyContent: 'center'}}>
          <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>
            Submit
          </Text>
        </TouchableOpacity>
        </View>
        
      {/* </ScrollView> */}
      </View>
    )
  }
  submit(){
    if(this.state.listrik == ''){
      alert("Biaya listrik tidak boleh kosong!")
    }
    else if(this.state.internet == ''){
      alert("Biaya internet tidak boleh kosong!")
    }
    else if(this.state.sampah == ''){
      alert("Biaya sampah tidak boleh kosong!")
    }
    else{
      const financing={
        id_kos: this.props.data.response.id_kos,
        bulan: this.state.bulan,
        tahun: '2019',
        sampah: this.state.sampah,
        internet: this.state.internet,
        listrik: this.state.listrik,
        kerusakan: this.state.kerusakan
      }
      this.props.dispatch(action.payment.Financing(financing))
    }
  }
};

const mapStateToProps = (state) => ({
  data: state.data,
  financing: state.financing
})

export default connect(mapStateToProps)(FormPengelola);
