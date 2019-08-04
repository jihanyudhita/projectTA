import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, StatusBar, Platform } from 'react-native'
import { Root } from 'native-base';
import { Router, Scene } from 'react-native-router-flux'
import {connect} from 'react-redux';
import action from './actions'

//screen
// import Routers from './routing';
import Register from './screen/register'
import Login from './screen/login'
import HomeScreen from './screen/homescreen'
import ProfilAnak from './screen/profilanak'
import EditProfil from './screen/editprofil'
import Welcome from './screen/welcome'
import ListAnak from './screen/listanak'
import ListPengelola from './screen/listpengelola'
import DaftarAnak from './screen/daftaranak'
import FormPengelola from './screen/formpengelola'
import ListPemilik from './screen/listpemilik'
import Home from './home';
import DetailAnak from './screen/detailAnak'
import { Icon } from 'native-base';

const TabIcon1 = (props) => {
    if(props.title === 'Home'){
      return (
        <Icon name='home' type='FontAwesome' />
      )  }
    else if(props.title === 'List'){
      return (
        <Icon name='ios-list' type='Ionicons' />
      )  }
    else if(props.title === 'Profile'){
      return (
        <Icon name='account' type='MaterialCommunityIcons' />
      )  }
}

class NewRoute extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
          isLoadingComplete: false,
          isAuthenticationReady: true,
          isAuthenticated: true,
          isPengelola: false,
          isPemilik: false
        }
    }

    componentDidMount(){
        console.log('ff', this.props)
        
    }

    render () {
        return (
            <Root>
                <StatusBar backgroundColor={'#fff'} barStyle='light-content' translucent={false}/>
                <Router>
                    <Scene key="root">
                        <Scene key="HomeScreen" component={HomeScreen} hideNavBar />
                        <Scene key='detailprofil' component={ProfilAnak} hideNavBar />
                        <Scene key='login' component={Login} hideNavBar />
                        <Scene key='home' component={Home} hideNavBar initial />
                        {/* <Scene key='route' component={Routers} hideNavBar/> */}
                        <Scene key='register' component={Register} hideNavBar />
                        <Scene key='editprofil' component={EditProfil} hideNavBar />
                        <Scene key='welcome' component={Welcome} hideNavBar />
                        <Scene key='daftaranak' component={DaftarAnak} hideNavBar />
                        <Scene key='formpengelola' component={FormPengelola} hideNavBar />
                        <Scene key='listpemilik' component={ListPemilik} hideNavBar />
                        <Scene key='detailAnak' component={DetailAnak} hideNavBar />
                    </Scene>
                </Router>
            </Root>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
    data: state.data,
    // baner: state.baner
  })

export default connect(mapStateToProps)(NewRoute)