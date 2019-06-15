// react-native link react-native-gesture-handler

import React, {PureComponent} from 'react';
import {View, Image, StatusBar, Dimensions} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import { fromLeft } from 'react-navigation-transitions';

import reducers from './src/reducers';

import HomeScreen from './src/components/HomeScreen';
import ActionScreen from './src/components/ActionScreen';

const {width, height} = Dimensions.get('window');
export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showHome: false,
        }
    }
    componentDidMount() {
        this.timeoutId = setTimeout(function () {
            this.setState({showHome: true});
        }.bind(this), 3000);
    } 

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        StatusBar.setBarStyle('light-content', true);

        const {showHome} = this.state;
        
        let enterScreen = (
            <Image
                style={styles.image}
                source={require('./src/image/go1_2x.png')}
            />
        );
        
        
        if (showHome) {
            enterScreen =  <AppContainer />;
        }
        
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                {enterScreen}
                {/* <ActionScreen /> */}
            </Provider>
        );
    }
}

const AppSwitchNavigator = createStackNavigator(
    {
        // Home: {screen: HomeScreen},
        Home: {screen: HomeScreen},
        Action: {screen: ActionScreen},
    },
    {
        mode: 'modal',
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'transparent',
            opacity: 1,
        },
        transitionConfig: () => fromLeft(500),
    },
);

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = {
    image: {
        width: '100%',
        height: '100%'
    }
};
