import React from 'react';
import {Actions} from 'react-native-router-flux';
import { StyleSheet,  View, TextInput, SafeAreaView, Image, Alert,
         ScrollView, Text, KeyboardAvoidingView, Picker, TouchableOpacity } from 'react-native';
import { Button, Header, Left, Body, Right, Icon} from 'native-base';
import action from '../actions';
import { connect } from 'react-redux';

class EditProfil extends React.Component {

    constructor(props){
        super(props);
        this.state={
            gender: 'l',
            newPassword: '',
            newNama:'',
            newEmail: '',
            newAsal: '',
            newNoHp: '',            
        }
    }

    componentDidMount(){
        console.log('edit', this.props)
        if(this.props.data.response){
            this.setState({
                gender: this.props.data.response.gender,
                newNama: this.props.data.response.nama,
                newEmail: this.props.data.response.email,
                newAsal: this.props.data.response.asal,
                newNoHp: this.props.data.response.no_hp
            })
        }
    }

    componentWillReceiveProps(props){
        console.log('update', props)
        if(props.update_user){
            Alert.alert(
                '',
                'Data user telah diperbaharui',
                [
                  {text: 'OK', onPress: () => this._reLogin()},
                ],
                {cancelable: false},
            );
        } else {
            alert('update gagal')
        }
    }
    render() {
        return(
            <View style={{width: '100%', height:'100%', backgroundColor: 'white'}}>
            <ScrollView style={{flex: 1}}>
                <View style={{width: '100%', height: 40, justifyContent: 'center', backgroundColor: 'white', flexDirection: 'row'}}>
                    <Icon name='md-arrow-back' type='Ionicons' style={{width:60, height:30, position:'absolute', right:5, color: 'white' }} />
                    <Text style={{alignSelf: 'flex-end', fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                        Srikandi
                    </Text>
                </View>
            <KeyboardAvoidingView style={{backgroundColor: 'white'}}>
                <View style={{borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'space-between'}}>
                    <Image style={{aspectRatio: 140/180, width: "20%", height: "40%"}} source={require('../assets/bulats.png')}/>
                    <Text style={{color:'red'}}>edit foto</Text>
                </View>
                <View style={{borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, marginTop: 20, flexDirection: "row", width:'90%', alignSelf:'center', alignItems:'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 15, color: '#808080', width:'40%'}}>Full Name</Text>
                    <TextInput style={{backgroundColor: 'transparent', width:'60%',alignItems:'flex-start', color: 'black'}}
                        placeholder= 'Masukkan nama lengkap' value={this.state.newNama} placeholderTextColor={'#808080'}
                        onChangeText={(text)=> this.setState({ newNama: text})}
                    >
                    </TextInput>
                </View>
                <View style={{borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, marginTop: 20, flexDirection: "row", width:'90%', alignSelf:'center', alignItems:'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 15, color: '#808080', width:'40%'}}>Password Baru</Text>
                    <TextInput style={{backgroundColor: 'transparent', width:'60%',alignItems:'flex-start', color: 'black'}}
                        placeholder= 'Masukkan password baru' value={this.state.newPassword} placeholderTextColor={'#808080'}
                        onChangeText={(text)=> this.setState({ newPassword: text})}
                    >
                    </TextInput>
                </View>
                <View style={{borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, marginTop: 20, flexDirection: "row", width:'90%', alignSelf:'center', alignItems:'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 15, color: '#808080', width:'40%'}}>Asal Daerah</Text>
                    <TextInput style={{backgroundColor: 'transparent', width:'60%',alignItems:'flex-start', color: 'black'}}
                        placeholder= 'Masukkan asal daerah' value={this.state.newAsal} placeholderTextColor={'#808080'}
                        onChangeText={(text)=> this.setState({ newAsal: text})}
                    >
                    </TextInput>
                </View>
                {/* <View style={{borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, marginTop: 20, flexDirection: "row", width:'90%', alignSelf:'center', alignItems:'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 15, color: '#808080'}}>Nick Name</Text>
                    <TextInput style={{backgroundColor: 'transparent', color: 'black'}}
                        placeholder= 'Jihan' placeholderTextColor={'black'}
                        >
                    </TextInput>
                </View> */}
                <View style={{borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, marginTop: 20, flexDirection: "row", width:'90%', alignSelf:'center', alignItems:'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 15, color: '#808080', width:'40%'}}>Email</Text>
                    <TextInput style={{backgroundColor: 'transparent', width:'60%',alignItems:'flex-start', color: 'black'}}
                        placeholder= 'Masukkan email baru' value={this.state.newEmail} placeholderTextColor={'#808080'}
                        onChangeText={(text)=> this.setState({ newEmail: text})}
                        >
                    </TextInput>
                </View>
                <View style={{borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, marginTop: 20, flexDirection: "row", width:'90%', alignSelf:'center', alignItems:'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 15, color: '#808080', width:'40%'}}>Phone Number</Text>
                    <TextInput style={{backgroundColor: 'transparent', width:'60%',alignItems:'flex-start', color: 'black'}}
                        placeholder= 'Masukkan nomor hp baru' value={this.state.newNoHp} placeholderTextColor={'#808080'}
                        onChangeText={(text)=> this.setState({ newNoHp: text})}
                        >
                    </TextInput>
                </View>
                {/* <View style={{borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, marginTop: 20, flexDirection: "row", width:'90%', alignSelf:'center', alignItems:'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 15, color: '#808080'}}>Username</Text>
                    <TextInput style={{backgroundColor: 'transparent', color: 'black'}}
                        placeholder= 'jihanyudhita' placeholderTextColor={'black'}
                        >
                    </TextInput>
                </View> */}
                <View style={{borderBottomColor: 'rgb(2,98,148)', borderBottomWidth: 1, marginTop: 20, flexDirection: "row", width:'90%', alignSelf:'center', alignItems:'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 15, color: '#808080', width:'40%'}}>Gender</Text>
                    {/* <TextInput style={{backgroundColor: 'transparent', color: 'black'}}
                        placeholder= 'Perempuan' placeholderTextColor={'black'}
                        >
                    </TextInput> */}
                    <Picker
                        selectedValue={this.state.gender}
                        style={{height: 50, width: '60%', alignItems:'flex-start'}}
                        // style={[styles.picker,{marginTop:15}]}                                                      
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({gender: itemValue})
                        }>
                        <Picker.Item label="Laki - laki" value="l" />
                        <Picker.Item label="Perempuan" value="p" />
                    </Picker>
                </View>                
            </KeyboardAvoidingView>
            </ScrollView>
            <Button style={{marginBottom: 20, width: '90%', borderRadius:5, position: 'absolute', bottom: 0, height: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, backgroundColor: 'rgb(2,98,148)'}}
                onPress={()=> this._updateUser()}
            >
                <Text style={{fontSize: 15, color: 'white', alignSelf: 'center'}}>Save</Text>
            </Button>
        </View>
        );
    }

    _reLogin = () => {
        const params = {email: this.state.newEmail , password: this.state.newPassword};
        this.props.dispatch(action.auth.Login(params))
        Actions.reset('home')
    }

    _updateUser = () => {
        const {newEmail, newNama, newPassword, newAsal, newNoHp, gender} = this.state
        if(newEmail == '' || newNama == '' || newAsal == '' || newNoHp == '' || newPassword == '' ){
            Alert.alert(
                '',
                'Silahkan periksa kembali, pastikan tidak ada data yang masih kosong',
                [
                  {text: 'OK', onPress: () => null},
                ],
                {cancelable: false},
            );
        } else {
            const body = {
                "id_user": this.props.data.response.id_user,
                "email": newEmail,
                "password": newPassword,
                "nama": newNama,
                "asal": newAsal,
                "no_hp": newNoHp,
                "gender": gender
            }
            this.props.dispatch(action.auth.updateProfile(body))
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
    isLoggedIn: state.isLoggedIn,
    data: state.data,
    update_user: state.update_user
})

export default connect(mapStateToProps)(EditProfil);