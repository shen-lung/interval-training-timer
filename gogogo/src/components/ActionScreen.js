import React, {PureComponent} from 'react';
import {Text, View, Platform} from 'react-native';
import {connect} from 'react-redux';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

const defaultFillPoints = 100;
const defaultPreFillPoints = 0;
const defaultDurationTime = 0;
const defaultDisabledColor = '#404040';
const getSeconds = (segundos) => {
    return (segundos * 1000);
}
const getTotalSegonds = (minutes, segundos) => {
    return (Number(minutes) * 60 + Number(segundos));
}

const isIos = Platform.OS === 'ios';

class ActionScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fill: defaultFillPoints,
            prefill: defaultPreFillPoints,
            duration: defaultDurationTime,
            tintColor: defaultDisabledColor,
            processPrepareRun: true,
            processWorkRun: false,
            processRelaxRun: false,
            processCoolDownRun: false,
            progressNumber: getTotalSegonds(this.props.minutesPrepare, this.props.segundosPrepare),
            timeNumber: 0,
            duration: 0,
        };
    }

    componentDidMount() {
        this.getProgressNumber();
    }

    componentWillUnmount() {
        clearInterval(this.state.timeNumber);
    }

    getProgressNumber = () => {
        const timeNumber = setInterval(this._setTime, 1000);

        this.setState({timeNumber});
    }

    _setTime = () => {
        const progressNumber = this.state.progressNumber - 1;
        
        if (progressNumber >= 0) {
            this.setState({progressNumber});
        } else {
            clearInterval(this.state.timeNumber);
        }
    }

    render() {
        let isInlinePrepare = true;
        const {
            fill,
            prefill,
            processPrepareRun,
            progressNumber,
        } = this.state;
        // const {
        //     minutesPrepare,
        //     segundosPrepare,
        //     minutesWork,
        //     segundosWork,
        //     minutesRelax,
        //     segundosRelax,
        //     minutesCoolDown,
        //     segundosCoolDown,
        //     minutesCycles,
        //     segundosCycles,
        //     totalMinutes,
        //     totalSegundos,
        // } = this.props;
        let duration = getSeconds(progressNumber);
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
                            duration={1000}
                            arcSweepAngle={90}
                            tintColor={defaultDisabledColor}
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor={defaultDisabledColor}
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
                            tintColor={defaultDisabledColor}
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor={defaultDisabledColor}
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
                            tintColor={defaultDisabledColor}
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor={defaultDisabledColor}
                        />
                    </View>
                    <View style={styles.processPrepare}>
                        <AnimatedCircularProgress
                            size={320}
                            width={46}
                            backgroundWidth={46}
                            fill={100}
                            rotation={225}
                            duration={1000}
                            arcSweepAngle={90}
                            tintColor='#FD5F00'
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor={defaultDisabledColor}
                        />
                    </View>
                </View>
                <View style={styles.inline}>
                    <AnimatedCircularProgress
                        size={246}
                        width={8}
                        backgroundWidth={0}
                        fill={0}
                        prefill={100}
                        rotation={316}
                        arcSweepAngle={268}
                        duration={duration}
                        tintColor='#FD5F00'
                        // tintColor={defaultDisabledColor}
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                    >
                        {
                            () => (<Text style={styles.timeText}>{progressNumber}</Text>)
                        }
                    </AnimatedCircularProgress>
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
                        backgroundColor={defaultDisabledColor}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({homeScreen}) => {
    return {
        minutesPrepare: homeScreen.minutesPrepare,
        segundosPrepare: homeScreen.segundosPrepare,
        minutesWork: homeScreen.minutesWork,
        segundosWork: homeScreen.segundosWork,
        minutesRelax: homeScreen.minutesRelax,
        segundosRelax: homeScreen.segundosRelax,
        minutesCoolDown: homeScreen.minutesCoolDown,
        segundosCoolDown: homeScreen.segundosCoolDown,
        minutesCycles: homeScreen.minutesCycles,
        segundosCycles: homeScreen.segundosCycles,
        totalMinutes: homeScreen.totalMinutes,
        totalSegundos: homeScreen.totalSegundos, 
    };
};

export default connect(
    mapStateToProps,
    {}
)(ActionScreen);

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
    inline: {
        marginLeft: isIos ? 64 : 82,
        marginTop: isIos ? -392 : -344,
        opacity: 1,
    },
    processPrepare: {
        marginLeft: -3,
        marginTop: -322,
    },
    outLine: {
        marginLeft: isIos ? 25 : 45,
        marginTop: -284,
    },
    homeContent: {
        color: '#ffffff',
    },
    timeText: {
        fontSize: 52,
        color: '#FD5F00',
    },
};
