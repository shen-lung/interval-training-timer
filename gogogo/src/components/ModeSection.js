import React, {PureComponent} from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
} from 'react-native';

import {titleColorCode} from './constants';

const isIos = Platform.OS === 'ios';

export default class ModeSection extends PureComponent {
    render() {
        const {
            timeColor,
            titleColor,
            titleText,
            minutes,
            segundos,
            handleMinutesPrepareChanged,
            handleSegundosPrepareChanged,
            handleAddSegundosPrepareChanged,
            handleSubtractSegundosPrepareChanged,
            handleOnBlurSegundosChanged,
            handleOnBlurMinutesChanged,
        } = this.props;
        const titleTextColorCode = titleColorCode;
        const titleColorCodeNumber = typeof titleColor !== 'undefined' ? titleColor : titleTextColorCode;

        return (
            <View style={styles.homeScreen}>
                <View style={styles.homeScreenContent}>
                    <View style={styles.time}>
                        <View style={styles.timePosition}>
                            <Text style={[styles.titleText, {color: titleColorCodeNumber}]}>{titleText}</Text>
                            <View style={[styles.timeSection ,{flexDirection: 'row'}]}>
                                <TextInput
                                    style={[styles.timeText, {color: timeColor}]}
                                    keyboardType='numeric'
                                    value={minutes}
                                    maxLength={2}
                                    onChangeText={handleMinutesPrepareChanged}
                                    onBlur={handleOnBlurMinutesChanged}
                                />
                                <Text style={[styles.textDevider, {color: timeColor}]}>:</Text>
                                <TextInput
                                    style={[styles.timeText, {color: timeColor}]}
                                    keyboardType='numeric'
                                    value={segundos}
                                    maxLength={2}
                                    onChangeText={handleSegundosPrepareChanged}
                                    onBlur={handleOnBlurSegundosChanged}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.timeButtons}>
                        <TouchableOpacity onPress={handleSubtractSegundosPrepareChanged}>
                            <View style={styles.changedTime}>
                                <Text style={styles.selectTimeText}>-</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleAddSegundosPrepareChanged}>
                            <View style={[styles.changedTime, styles.addButton]}>
                                <Text style={styles.selectTimeText}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    homeScreen: {
        backgroundColor: '#1F1F1F',
    },
    homeScreenContent: {
        flexDirection: 'row',
        height: 60,
        marginLeft: 10,
        marginTop: 10,
        width: '94%',
    },
    timeButtons: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
    },
    time: {
        backgroundColor: '#333333',
        borderRadius: 50,
        height: 60,
        marginTop: -4,
        width: 226,
    },
    timePosition: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        width: 186,
        justifyContent: 'space-between',
    },
    changedTime: {
        alignItems: 'center',
        backgroundColor: '#AAAAAA',
        borderRadius: 50,
        height: 50,
        justifyContent: 'center',
        width: 50,
    },
    addButton: {
        marginLeft: 8,
    },
    timeText: {
        fontSize: 28,
    },
    timeSection: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDevider: {
        fontSize: 28,
        paddingBottom: isIos ? 0 : 5,
    },
    titleText: {
        fontSize: 16,
    },
    selectTimeText: {
        fontSize: 38,
    },
};
