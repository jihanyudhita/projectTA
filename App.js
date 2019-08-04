import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, StatusBar, Platform } from 'react-native'
import NewRoute from './NewRoute';
import reducers from './reducers'
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import ReduxThunk from 'redux-thunk';

export let store = compose(
  applyMiddleware(ReduxThunk),
  autoRehydrate()
)(createStore)(reducers);

persistStore(store,{storage: AsyncStorage})

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: true,
      isAuthenticated: true,
      isPengelola: true,
      isPemilik: true
    }
  }

  render () {
    console.log('app',this.props)
    return (
      <Provider store={store}>
        <View style={styles.container}>
          { Platform.OS === 'ios' && <View style={styles.statusBarBackground } />}
          { Platform.OS === 'android' && <View style={styles.statusBarUnderlay } />}
            <NewRoute />        
        </View>
      </Provider>
    )
  }
}

export default (App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 19.6 : 0,
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'blue'
  }
});
console.disableYellowBox = true;