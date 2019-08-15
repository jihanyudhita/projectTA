import React from 'react';
import { StyleSheet,  View, TextInput, Image, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { Button, Icon, Picker} from 'native-base';
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import action from '../actions'

 class Register extends React.Component {
    constructor (props)
    {
        super(props)
        this.state={
            jk: 'l',
            nama: '',
            email: '',
            password: '',
            no_hp: '',
            asal: '',
            nama_kos: '',
            picked: false, 
            data: ['Kos Putri Srikandi 1',
            'Kos Putri Srikandi 2',
            'Kos Putri Srikandi 3',
            'Kos Putri Srikandi 4',
            'Kos Putri Srikandi 5',
            'Kos Putri Srikandi 6'],
            selectedValue: '',          
        }
    }

    componentDidMount(){
        console.log('register awal', this.props)
    }

    componentWillReceiveProps(params){
        console.log('setelah', params)
        if(params.registerMsg.response.status == 1){
            Alert.alert(
                '',
                'Registrasi berhasil !',
                [
                  {text: 'OK', onPress: () => Actions.pop()},
                ],
                {cancelable: false},
              );
        }
        else{
            Alert.alert(
                '',
                'Registrasi gagal, silahkan coba kembali !',
                [
                  {text: 'OK', onPress: () => null},
                ],
                {cancelable: false},
              );
        }
    }

    updatejk = (jk) => {
        this.setState({ jk: jk })
     }
    
    render() {
        return(
            <View style={{width: '100%', height:'100%'}}>
            <ScrollView style={{flex: 1}}>
            {/* <Header>
                <Left style={{backgroundColor: 'red'}}></Left>
                <Body style={{backgroundColor: 'blue'}}></Body>
                <Right style={{backgroundColor: 'green'}}></Right>
            </Header> */}
            <KeyboardAvoidingView>
                    {/* <Image style={{width: "30%", height: undefined, aspectRatio: 908/898, alignSelf: 'center'}} source={require('../assets/bulat.png')}/> */}
                    <View style={{width: '100%', height: 40, justifyContent: 'center'}}>
                        <Text style={{alignSelf: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                            Register
                        </Text>
                    </View>
                    <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
                        <Icon name='user' type='Feather' style={{color: 'rgb(2,98,148)'}}/>
                        <TextInput style={{width: '80%', borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, height: 50, color: 'rgb(2,98,148)'}}
                        placeholder= 'Full Name' placeholderTextColor={'rgb(2,98,148)'}
                        onChangeText={(text)=> this.setState({nama: text})}
                        >
                        </TextInput>
                    </View>
                    {/* <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
                        <Icon name='user-circle' type='FontAwesome' style={{color: 'rgb(2,98,148)'}}/>
                        <TextInput style={{width: '80%', borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, height: 50, color: 'rgb(2,98,148)'}}
                        placeholder= 'Username' placeholderTextColor={'rgb(2,98,148)'}
                        >
                        </TextInput>
                    </View> */}
                    <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
                        <Icon name='lock' type='Feather' style={{color: 'rgb(2,98,148)'}}/>
                        <TextInput style={{width: '80%', borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, height: 50, color: 'rgb(2,98,148)'}}
                        placeholder= 'Password' placeholderTextColor={'rgb(2,98,148)'} secureTextEntry={true}
                        onChangeText={(text)=> this.setState({password:text})}
                        >
                        </TextInput>
                    </View>
                    {/* <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
                        <Icon name='lock' type='FontAwesome' style={{color: 'rgb(2,98,148)'}}/>
                        <TextInput style={{width: '80%', borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, height: 50, color: 'rgb(2,98,148)'}}
                        placeholder= 'Repeat Password' placeholderTextColor={'rgb(2,98,148)'}
                        >
                        </TextInput>
                    </View> */}
                    <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
                        <Icon name='mail' type='Feather' style={{color: 'rgb(2,98,148)'}}/>
                        <TextInput style={{width: '80%', borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, height: 50, color: 'rgb(2,98,148)'}}
                        placeholder= 'Email' placeholderTextColor={'rgb(2,98,148)'}
                        onChangeText={(text)=> this.setState({email: text})}
                        >
                        </TextInput>
                    </View>
                    <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
                        <Icon name='mobile-phone' type='FontAwesome' style={{color: 'rgb(2,98,148)'}}/>
                        <TextInput style={{width: '80%', borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, height: 50, color: 'rgb(2,98,148)'}}
                        placeholder= 'Phone' placeholderTextColor={'rgb(2,98,148)'}
                        onChangeText={(text)=> this.setState({no_hp: text})}
                        >
                        </TextInput>
                    </View>
                    <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
                        <Icon name='map-pin' type='FontAwesome' style={{color: 'rgb(2,98,148)'}}/>
                        <TextInput style={{width: '80%', borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, height: 50, color: 'rgb(2,98,148)'}}
                        placeholder= 'Asal' placeholderTextColor={'rgb(2,98,148)'}
                        onChangeText={(text)=> this.setState({asal: text})}
                        >
                        </TextInput>
                    </View>
                    <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
                        <Icon name='genderless' type='FontAwesome' style={{color: 'rgb(2,98,148)'}}/>
                        <TextInput style={{width: '80%', backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, height: 50, color: 'rgb(2,98,148)'}}
                        placeholder= 'Gender' placeholderTextColor={'rgb(2,98,148)'}
                        >
                        </TextInput>
                    </View>
                    <View style={{marginTop: 10, paddingLeft: 20, flexDirection: "row", marginHorizontal: 20}}>
                        <TouchableOpacity onPress={()=>this.setState({jk:'l'})} style={{backgroundColor: this.state.jk=='l'?'red':'transparent', width: "20%", padding: 10, justifyContent: 'center'}}>
                            <Image style={{alignSelf: 'center', width: "100%", height: undefined, aspectRatio: 140/140}} source={require('../assets/boy.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({jk:'p'})} style={{backgroundColor: this.state.jk=='p'?'red':'transparent', width: "20%", padding: 10, justifyContent: 'center', marginLeft: 20}}>
                            <Image style={{alignSelf: 'center', width: "100%", height: undefined, aspectRatio: 140/140}} source={require('../assets/girl.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20, paddingLeft: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
                        <Icon name='home' type='Feather' style={{color: 'rgb(2,98,148)'}}/>
                        {/* <Picker style={{width: '40%', height: 40, justifyContent:'center', alignItems:'center', alignSelf:'center', backgroundColor:'#e0e0e0'}}                                                                        
                            selectedValue={this.state.dataKos}
                            onValueChange={(itemValue, itemIndex) => 
                                { 
                                    this.setState({ dataKos: itemValue }) 
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
                        </Picker> */}
                        
                        <Picker selectedValue={this.state.id_kos} 
                                onValueChange= {(value)=> this.setState({id_kos: value})}>
                            <Picker.Item label="Kos Srikandi 1" value="8" />
                            <Picker.Item label="Kos Srikandi 2" value="9" />
                            <Picker.Item label="Kos Srikandi 3" value="10" />
                            <Picker.Item label="Kos Srikandi 4" value="11" />
                            <Picker.Item label="Kos Srikandi 5" value="7" /> 
                        </Picker>
                    </View>
                    <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
                        <Icon name='money' type='FontAwesome' style={{color: 'rgb(2,98,148)'}}/>
                        <TextInput style={{width: '80%', borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, height: 50, color: 'rgb(2,98,148)'}}
                        placeholder= 'Biaya Kos' placeholderTextColor={'rgb(2,98,148)'}
                        >
                        </TextInput>
                    </View>
                
                    
                    {/* <Picker selectedValue = {this.state.jk} 
                        style={{
                            width: '80%',
                            backgroundColor: 'rgb(30,28,39)',
                            marginLeft: 10,
                            marginRight: 10,
                            height: 50,
                            color: 'white',
                            marginTop: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            fontSize: 9
                        }}
                        onValueChange = {this.updatejk}>
                        <Picker.Item label = "Jenis Kelamin" value = '' />
                        <Picker.Item label = "Jenis Kelamin" value = "jk" />
                        <Picker.Item label = "Laki-Laki" value = "laki" />
                        <Picker.Item label = "Perempuan" value = "perempuan" />
                    </Picker> */}
                    <Button onPress={()=>this.register()} style={{width: '100%', position: 'absolute', bottom: 0, height: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, backgroundColor: 'rgb(2,98,148)'}}>
                        <Text style={{fontSize: 15, color: 'white', alignSelf: 'center'}}>Create Account</Text>
                    </Button>
            </KeyboardAvoidingView>
            </ScrollView>
            </View>
        );
    }

    register(){
        if(this.state.nama == ''){
            alert("Nama tidak boleh kosong!")
        }
        else if(this.state.password == ''){
            alert("Password tidak boleh kosong!")
        }
        else if(this.state.email == ''){
            alert("Email tidak boleh kosong!")    
        }
        else if(this.state.no_hp == ''){
            alert("No HP tidak boleh kosong!")
        }
        else if(this.state.jk == ''){
            alert("Pilih jenis kelamin")
        }
        else if(this.state.asal == ''){
            alert("Asal kos tidak boleh kosong!")
        }
        else if(this.state.id_kos == ''){
            alert("Silahkan pilih kos terlebih dahulu!")
        }
        else {
            const register={
                email: this.state.email,
                password: this.state.password,
                nama: this.state.nama,
                asal: this.state.asal,
                no_hp: this.state.no_hp,
                gender: this.state.jk,
                id_kos: this.state.id_kos,
            }
        this.props.dispatch(action.auth.Register(register))
        console.log('register', register)
    }
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
    register: state.register,
    registerMsg: state.registerMsg
  })

  export default connect(mapStateToProps)(Register);