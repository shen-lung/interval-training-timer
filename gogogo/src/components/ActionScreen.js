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
        // #FF073A #0093FF #DFE800 #FD5F00

        return (
            <View style={styles.homeScreen}>
                <View style={styles.homeScreenContent}>
                    <View>
                        <AnimatedCircularProgress
                            size={320}
                            width={46}
                            backgroundWidth={46}
                            fill={100}
                            rotation={-45}
                            duration={0}
                            arcSweepAngle={90}
                            tintColor='#404040'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor='#404040'
                        />
                    </View>
                    <View style={styles.precessRelax}>
                        <AnimatedCircularProgress
                            size={320}
                            width={46}
                            backgroundWidth={46}
                            fill={100}
                            rotation={45}
                            duration={1000}
                            arcSweepAngle={90}
                            tintColor='#404040'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor='#404040'
                        />
                    </View>
                    <View style={styles.processCoolDown}>
                        <AnimatedCircularProgress
                            size={320}
                            width={46}
                            backgroundWidth={46}
                            fill={100}
                            rotation={135}
                            duration={1000}
                            arcSweepAngle={90}
                            tintColor='#DFE800'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor='#404040'
                        />
                    </View>
                    <View style={styles.processPrepare}>
                        <AnimatedCircularProgress
                            size={320}
                            width={46}
                            backgroundWidth={46}
                            fill={100}
                            rotation={225}
                            duration={0}
                            arcSweepAngle={90}
                            tintColor='#404040'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor='#404040'
                        />
                    </View>
                </View>
                    <View style={styles.processCycles}>
                        <AnimatedCircularProgress
                            size={246}
                            width={8}
                            backgroundWidth={0}
                            fill={100}
                            rotation={0}
                            duration={0}
                            arcSweepAngle={360}
                            tintColor='#DFE800'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                        />
                    </View>
                    <View style={styles.outLine}>
                        <AnimatedCircularProgress
                            size={323}
                            width={1}
                            backgroundWidth={1}
                            fill={100}
                            rotation={0}
                            duration={0}
                            arcSweepAngle={360}
                            tintColor='#676767'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor='#404040'
                        />
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
        marginLeft: 0,
        marginTop: -318,
    },
    processCycles: {
        marginLeft: 64,
        marginTop: -392,
    },
    processPrepare: {
        marginLeft: -3,
        marginTop: -322,
    },
    outLine: {
        marginLeft: 25,
        marginTop: -284,
    },
    homeContent: {
        color: '#ffffff',
    },
};
