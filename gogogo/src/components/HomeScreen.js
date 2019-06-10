import React, {PureComponent} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Platform,
} from 'react-native';
import {connect} from 'react-redux';

import ModeSection from './ModeSection';
import SimpleModeSection from './SimpleModeSection';

import {
    prepareColorCode,
    workColorCode,
    relaxColorCode,
    coolDownColorCode,
    cycleColorCode,
} from './constants';

import {
    minutesPrepareChanged,
    segundosPrepareChanged,
    minutesWorkChanged,
    segundosWorkChanged,
    minutesRelaxChanged,
    segundosRelaxChanged,
    minutesCoolDownChanged,
    segundosCoolDownChanged,
    minutesCyclesChanged,
    segundosCyclesChanged,
    addSegundosPrepareChanged,
    subtractSegundosPrepareChanged,
    addSegundosWorkChanged,
    subtractSegundosWorkChanged,
    addSegundosRelaxChanged,
    subtractSegundosRelaxChanged,
    addSegundosCoolDownChanged,
    subtractSegundosCoolDownChanged,
    addSegundosCyclesChanged,
    subtractSegundosCyclesChanged,
    onBlurSegundosPrepare,
    onBlurSegundosWork,
    onBlurSegundosRelax,
    onBlurSegundosCoolDown,
    onBlurSegundosCycles,
    onBlurMinutesPrepare,
    onBlurMinutesWork,
    onBlurMinutesRelax,
    onBlurMinutesCoolDown,
    onBlurMinutesCycles,
} from '../actions';

const isIos = Platform.OS === 'ios';

class HomeScreen extends PureComponent {
    onBlurMinutesPrepareChanged(minutes) {
        this.props.onBlurMinutesPrepare(minutes);
    }
    
    onBlurMinutesWorkChanged(minutes) {
        this.props.onBlurMinutesWork(minutes);
    }
    
    onBlurMinutesRelaxChanged(minutes) {
        this.props.onBlurMinutesRelax(minutes);
    }
    
    onBlurMinutesCoolDownChanged(minutes) {
        this.props.onBlurMinutesCoolDown(minutes);
    }
    
    onBlurMinutesCyclesChanged(minutes) {
        this.props.onBlurMinutesCycles(minutes);
    }
    
    onBlurSegundosPrepareChanged(segundos) {
        this.props.onBlurSegundosPrepare(segundos);
    }
    
    onBlurSegundosWorkChanged(segundos) {
        this.props.onBlurSegundosWork(segundos);
    }
    
    onBlurSegundosRelaxChanged(segundos) {
        this.props.onBlurSegundosRelax(segundos);
    }
    
    onBlurSegundosCoolDownChanged(segundos) {
        this.props.onBlurSegundosCoolDown(segundos);
    }
    
    onBlurSegundosCyclesChanged(segundos) {
        this.props.onBlurSegundosCycles(segundos);
    }

    onMinutesPrepareChanged(minutes) {
        this.props.minutesPrepareChanged(minutes);
    }
    
    onSegundosPrepareChanged(segundos) {
        this.props.segundosPrepareChanged(segundos);
    }
    
    onMinutesWorkChanged(minutes) {
        this.props.minutesWorkChanged(minutes);
    }
    
    onSegundosWorkChanged(segundos) {
        this.props.segundosWorkChanged(segundos);
    }
    
    onMinutesRelaxChanged(minutes) {
        this.props.minutesRelaxChanged(minutes);
    }
    
    onSegundosRelaxChanged(segundos) {
        this.props.segundosRelaxChanged(segundos);
    }
    
    onMinutesCoolDownChanged(minutes) {
        this.props.minutesCoolDownChanged(minutes);
    }
    
    onSegundosCoolDownChanged(segundos) {
        this.props.segundosCoolDownChanged(segundos);
    }
    
    onMinutesCyclesChanged(minutes) {
        this.props.minutesCyclesChanged(minutes);
    }
    
    onSegundosCyclesChanged(segundos) {
        this.props.segundosCyclesChanged(segundos);
    }

    onAddSegundosPrepareChanged() {
        this.props.addSegundosPrepareChanged();
    }
    
    onSubtractSegundosPrepareChanged() {
        this.props.subtractSegundosPrepareChanged();
    }
    
    onAddSegundosWorkChanged() {
        this.props.addSegundosWorkChanged();
    }
    
    onSubtractSegundosWorkChanged() {
        this.props.subtractSegundosWorkChanged();
    }
    
    onAddSegundosRelaxChanged() {
        this.props.addSegundosRelaxChanged();
    }
    
    onSubtractSegundosRelaxChanged() {
        this.props.subtractSegundosRelaxChanged();
    }
    
    onAddSegundosCoolDownChanged() {
        this.props.addSegundosCoolDownChanged();
    }
    
    onSubtractSegundosCoolDownChanged() {
        this.props.subtractSegundosCoolDownChanged();
    }
    
    onAddSegundosCyclesChanged() {
        this.props.addSegundosCyclesChanged();
    }
    
    onSubtractSegundosCyclesChanged() {
        this.props.subtractSegundosCyclesChanged();
    }

    render() {
        const {
            minutesPrepare,
            segundosPrepare,
            minutesWork,
            segundosWork,
            minutesRelax,
            segundosRelax,
            minutesCoolDown,
            segundosCoolDown,
            minutesCycles,
            segundosCycles,
            totalMinutes,
            totalSegundos, 
        } = this.props;

        return (
            <View style={styles.homeScreen}>
                <View style={styles.modeSection}>
                    <ModeSection 
                        timeColor={prepareColorCode}
                        minutes={minutesPrepare}
                        segundos={segundosPrepare}
                        titleText='Prepare'
                        handleMinutesPrepareChanged={this.onMinutesPrepareChanged.bind(this)}
                        handleSegundosPrepareChanged={this.onSegundosPrepareChanged.bind(this)}
                        handleAddSegundosPrepareChanged={this.onAddSegundosPrepareChanged.bind(this)}
                        handleSubtractSegundosPrepareChanged={this.onSubtractSegundosPrepareChanged.bind(this)}
                        handleOnBlurSegundosChanged={this.onBlurSegundosPrepareChanged.bind(this)}
                        handleOnBlurMinutesChanged={this.onBlurMinutesPrepareChanged.bind(this)}
                    />
                    <ModeSection 
                        timeColor={workColorCode}
                        minutes={minutesWork}
                        segundos={segundosWork}
                        titleText='Work'
                        handleMinutesPrepareChanged={this.onMinutesWorkChanged.bind(this)}
                        handleSegundosPrepareChanged={this.onSegundosWorkChanged.bind(this)}
                        handleAddSegundosPrepareChanged={this.onAddSegundosWorkChanged.bind(this)}
                        handleSubtractSegundosPrepareChanged={this.onSubtractSegundosWorkChanged.bind(this)}
                        handleOnBlurSegundosChanged={this.onBlurSegundosWorkChanged.bind(this)}
                        handleOnBlurMinutesChanged={this.onBlurMinutesWorkChanged.bind(this)}
                    />
                    <ModeSection 
                        timeColor={relaxColorCode}
                        minutes={minutesRelax}
                        segundos={segundosRelax}
                        titleText='Relax'
                        handleMinutesPrepareChanged={this.onMinutesRelaxChanged.bind(this)}
                        handleSegundosPrepareChanged={this.onSegundosRelaxChanged.bind(this)}
                        handleAddSegundosPrepareChanged={this.onAddSegundosRelaxChanged.bind(this)}
                        handleSubtractSegundosPrepareChanged={this.onSubtractSegundosRelaxChanged.bind(this)}
                        handleOnBlurSegundosChanged={this.onBlurSegundosRelaxChanged.bind(this)}
                        handleOnBlurMinutesChanged={this.onBlurMinutesRelaxChanged.bind(this)}
                    />
                    <ModeSection 
                        timeColor={coolDownColorCode}
                        minutes={minutesCoolDown}
                        segundos={segundosCoolDown}
                        titleText='Cool Down'
                        handleMinutesPrepareChanged={this.onMinutesCoolDownChanged.bind(this)}
                        handleSegundosPrepareChanged={this.onSegundosCoolDownChanged.bind(this)}
                        handleAddSegundosPrepareChanged={this.onAddSegundosCoolDownChanged.bind(this)}
                        handleSubtractSegundosPrepareChanged={this.onSubtractSegundosCoolDownChanged.bind(this)}
                        handleOnBlurSegundosChanged={this.onBlurSegundosCoolDownChanged.bind(this)}
                        handleOnBlurMinutesChanged={this.onBlurMinutesCoolDownChanged.bind(this)}
                    />
                    <ModeSection 
                        timeColor={cycleColorCode}
                        minutes={minutesCycles}
                        segundos={segundosCycles}
                        titleText='Cycles'
                        handleMinutesPrepareChanged={this.onMinutesCyclesChanged.bind(this)}
                        handleSegundosPrepareChanged={this.onSegundosCyclesChanged.bind(this)}
                        handleAddSegundosPrepareChanged={this.onAddSegundosCyclesChanged.bind(this)}
                        handleSubtractSegundosPrepareChanged={this.onSubtractSegundosCyclesChanged.bind(this)}
                        handleOnBlurSegundosChanged={this.onBlurSegundosCyclesChanged.bind(this)}
                        handleOnBlurMinutesChanged={this.onBlurMinutesCyclesChanged.bind(this)}
                    />
                    <View style={styles.total}>
                        <SimpleModeSection
                            titleText='TOTAL'
                            totalMinutes={totalMinutes}
                            totalSegundos={totalSegundos}
                        />
                    </View>
                </View>
                    <View style={styles.goButtonSection}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Action')}>
                            <View style={styles.goButton}>
                                <Text style={styles.goButtonText}>GO</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                <View style={styles.footerSection}>
                    <TouchableHighlight onPress={this.onPress}>
                        <View style={styles.iconSection}>
                            <Image
                                source={require('../image/reload.png')}
                                style={styles.footerIcon}
                            />
                            <Text style={styles.footerIconTextDescription}>Load</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.iconSection}>
                        <Image
                            source={require('../image/save.png')}
                            style={styles.footerIcon}
                        />
                        <Text style={styles.footerIconTextDescription}>Save</Text>
                    </View>
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
    {
        minutesPrepareChanged,
        segundosPrepareChanged,
        minutesWorkChanged,
        segundosWorkChanged,
        minutesRelaxChanged,
        segundosRelaxChanged,
        minutesCoolDownChanged,
        segundosCoolDownChanged,
        minutesCyclesChanged,
        segundosCyclesChanged,
        addSegundosPrepareChanged,
        subtractSegundosPrepareChanged,
        addSegundosWorkChanged,
        subtractSegundosWorkChanged,
        addSegundosRelaxChanged,
        subtractSegundosRelaxChanged,
        addSegundosCoolDownChanged,
        subtractSegundosCoolDownChanged,
        addSegundosCyclesChanged,
        subtractSegundosCyclesChanged,
        onBlurSegundosPrepare,
        onBlurSegundosWork,
        onBlurSegundosRelax,
        onBlurSegundosCoolDown,
        onBlurSegundosCycles,
        onBlurMinutesPrepare,
        onBlurMinutesWork,
        onBlurMinutesRelax,
        onBlurMinutesCoolDown,
        onBlurMinutesCycles,
    }
)(HomeScreen);

const styles = {
    homeScreen: {
        backgroundColor: '#1F1F1F',
        height: '100%',
        justifyContent: 'space-between',
    },
    modeSection: {
        marginTop: isIos ? 80 : 20,
    },
    total: {
        marginTop: 10,
    },
    goButtonSection: {
        alignItems: 'center',
        marginTop: 30,
    },
    goButton: {
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        borderRadius: 50,
        height: 100,
        justifyContent: 'center',
        width: 100,
    },
    goButtonText: {
        color: '#3C3C3C',
        fontSize: 50,
    },
    footerSection: {
        flexDirection: 'row',
        height: 60,
        marginLeft: 16,
        marginTop: 10,
        marginBottom: 30,
        width: '90%',
        justifyContent: 'space-between',
    },
    footerIconTextDescription: {
        color: '#B9B9B9',
        fontSize: 14,
        marginTop: 2,
    },
    footerIcon: {
        width: 40,
        height: 36,
    },
    iconSection: {
        alignItems: 'center',
    }
};
