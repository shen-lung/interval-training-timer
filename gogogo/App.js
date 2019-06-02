import React, {PureComponent} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';

import HomeScreen from './src/components/HomeScreen';
import ActionScreen from './src/components/ActionScreen';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showHome: true,
        }
    }
    componentDidMount() {
        this.timeoutId = setTimeout(function () {
            this.setState({showHome: true});
        }.bind(this), 1000);
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
            enterScreen = <ActionScreen />;
        }
        
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                {enterScreen}
            </Provider>
        );
    }
}

const styles = {
    image: {
        width: '100%',
        height: '100%'
    }
};
