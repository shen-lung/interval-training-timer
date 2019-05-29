import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class ActionScreen extends PureComponent {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         showHome: false,
    //     }
    // }
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         timeNumber: 0,
    //         progressNumber: 0,
    //     };
    // }

    // componentDidMount() {
    //     this.getProgressNumber();
    // }

    // componentWillUnmount() {
    //     clearInterval(this.state.timeNumber);
    // }

    // getProgressNumber = () => {
    //     const timeNumber = setInterval(this._setTime, 1000);

    //     this.setState({timeNumber});
    // }

    // _setTime = () => {
        // const progressNumber = this.state.progressNumber + 10;

    //     if (progressNumber <= 100) {
    //         this.setState({progressNumber});
    //     } else {
    //         clearInterval(this.state.timeNumber);
    //     }
    // }

    onPress = () => {
        alert('WORK press button');
    }
    
    render() {
        // const {progressNumber} = this.state.progressNumber;

        return (
            <View style={styles.homeScreen}>
                <View style={styles.homeScreenContent}>
                    <View>
                        <AnimatedCircularProgress
                            size={320}
                            width={46}
                            backgroundWidth={40}
                            fill={100}
                            rotation={-36}
                            duration={1000}
                            arcSweepAngle={72}
                            tintColor='#FF073A'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor='#404040'
                        />
                    </View>
                    <View style={styles.precessRelax}>
                        <AnimatedCircularProgress
                            size={320}
                            width={46}
                            backgroundWidth={40}
                            fill={100}
                            rotation={36}
                            duration={1000}
                            arcSweepAngle={72}
                            tintColor='#0093FF'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor='#404040'
                        />
                    </View>
                    <View style={styles.processCoolDown}>
                        <AnimatedCircularProgress
                            size={320}
                            width={46}
                            backgroundWidth={40}
                            fill={100}
                            rotation={108}
                            duration={1000}
                            arcSweepAngle={72}
                            tintColor='#DFE800'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor='#404040'
                        />
                    </View>
                    <View style={styles.processCycles}>
                        <AnimatedCircularProgress
                            size={320}
                            width={46}
                            backgroundWidth={40}
                            fill={100}
                            rotation={180}
                            duration={1000}
                            arcSweepAngle={72}
                            tintColor='#0CE81D'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor='#404040'
                        />
                    </View>
                    <View style={styles.processPrepare}>
                        <AnimatedCircularProgress
                            size={320}
                            width={46}
                            fill={100}
                            rotation={252}
                            duration={1000}
                            arcSweepAngle={72}
                            tintColor='#FD5F00'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor='#404040'
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    homeScreen: {
        backgroundColor: '#1F1F1F',
        height: '100%',
    },
    homeScreenContent: {
        alignItems: 'center',
        marginTop: '50%',
        justifyContent: 'center',
    },
    precessRelax: {
        marginLeft: 3,
        marginTop: -319,
    },
    processCoolDown: {
        marginLeft: 2,
        marginTop: -318,
    },
    processCycles: {
        marginLeft: -1,
        marginTop: -320,
    },
    processPrepare: {
        marginLeft: -3,
        marginTop: -322,
    },
    homeContent: {
        color: '#ffffff',
    },
};
