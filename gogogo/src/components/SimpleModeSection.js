import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import {titleColorCode} from './constants';

export default class SimpleModeSection extends PureComponent {
    render() {
        const {
            timeColor,
            titleColor,
            titleText,
            totalMinutes,
            totalSegundos,
        } = this.props;
        const titleTextColorCode = titleColorCode;
        const titleColorCodeNumber = typeof titleColor !== 'undefined' ? titleColor : titleTextColorCode;
        const timeColorCodeNumber = typeof titleColor !== 'undefined' ? timeColor : titleTextColorCode;
        const totalTime = `${totalMinutes}:${totalSegundos}`;

        return (
            <View style={styles.homeScreen}>
                <View style={styles.homeScreenContent}>
                    <View style={styles.time}>
                        <View style={styles.timePosition}>
                            <Text style={[styles.titleText, {color: titleColorCodeNumber}]}>{titleText}</Text>
                            <Text style={[styles.timeText, {color: timeColorCodeNumber}]}>{totalTime}</Text>
                        </View>
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
    time: {
        backgroundColor: '#333333',
        borderRadius: 50,
        height: 60,
        marginTop: -4,
        width: '100%',
    },
    timePosition: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        width: '89%',
    },
    timeText: {
        fontSize: 32,
    },
    titleText: {
        fontSize: 20,
    },
};
