import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import HomePage from './screen/homescreen';
import ListAnak from './screen/listanak'
import ProfilAnak from './screen/profilanak'
import Login from './screen/login'
import ListPengelola from './screen/listpengelola'
import ListPemilik from './screen/listpemilik'

const init = {
    opt1: false,
    opt2: false,
    opt3: false,
    opt4: false,
    opt5: false,
};

class Home extends Component {
    state = {
        opt1: true,
        opt2: false,
        opt3: false,
        opt4: false,
        opt5: false,
        isPengelola: false,
        isPemilik: false
    };

    componentDidMount(){
        console.log('home', this.props)
        if(!this.props.isLoggedIn){
            Actions.login()
        } else {
            if(this.props.data){
                if(this.props.data.response.role == 'pengelola'){
                    this.setState({ isPengelola: true })
                } else if(this.props.data.response.role == 'pemilik'){
                    this.setState({ isPemilik: true })
                }
            }
        }
    }

    componentWillUnmount(){
        this.props.dispatch({ type: 'RESET_STATUS' });
    }

    render() {
        const {
            container,
            buttonInactive,
            buttonActive,
            footer,
            img,
            text
        } = styles;

        return (
            <View style={container}>
                <View style={{ flex: 1 }}>
                    {this.state.opt1 && <HomePage />}
                    {this.state.opt2 && <ListAnak />}
                    {this.state.opt3 && <ProfilAnak />}
                    {this.state.opt4 && <ListPengelola />}
                    {this.state.opt5 && <ListPemilik />}
                </View>

                <View style={footer}>
                    <TouchableOpacity
                        style={[buttonInactive, this.state.opt1 && buttonActive]}
                        onPress={() => this.setState({ ...init, opt1: true })}
                    >
                        <Icon name='home' type='FontAwesome' />
                        <Text style={text}>Home</Text>
                    </TouchableOpacity>

                    {
                        !this.state.isPemilik && !this.state.isPengelola ?
                        <TouchableOpacity
                            style={[buttonInactive, this.state.opt2 && buttonActive]}
                            onPress={() => this.setState({ ...init, opt2: true })}
                        >
                            <Icon name='ios-list' type='Ionicons' />
                            <Text style={text}>Form Pembayaran</Text>
                        </TouchableOpacity>
                        : null
                    }
                    {
                        !this.state.isPengelola ? null :
                        <TouchableOpacity
                            style={[buttonInactive, this.state.opt4 && buttonActive]}
                            onPress={() => this.setState({ ...init, opt4: true })}
                        >
                            <Icon name='ios-list' type='Ionicons' />
                            <Text style={text}>List Anak</Text>
                        </TouchableOpacity>
                    }                        
                    {
                        !this.state.isPemilik ? null :
                        <TouchableOpacity
                            style={[buttonInactive, this.state.opt5 && buttonActive]}
                            onPress={() => this.setState({ ...init, opt5: true })}
                        >
                            <Icon name='ios-list' type='Ionicons' />
                            <Text style={text}>List Pemilik</Text>
                        </TouchableOpacity>
                    }   
                    <TouchableOpacity
                        style={[buttonInactive, this.state.opt3 && buttonActive]}
                        onPress={() => this.setState({ ...init, opt3: true })}
                    >
                        <Icon name='account' type='MaterialCommunityIcons' />
                        <Text style={text}>Account</Text>
                    </TouchableOpacity>                     
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
    },
    buttonActive: {
        borderTopWidth: 3,
        borderColor: '#5EA9DD',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonInactive: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        shadowColor: '#dedede',
        shadowOffset: { width: 0, height: -2 },
        shadowRadius: 8,
        shadowOpacity: 10,
        elevation: 15
    },
    img: {
        width: 24,
        height: 24,
        marginBottom: 2
    },
    text: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#3682B7'
    }
});

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
    data: state.data,
    // baner: state.baner
})

export default connect(mapStateToProps)(Home);
