import {
    MINUTES_PREPARE_CHANGED,
    SEGUNDOS_PREPARE_CHANGED,
    MINUTES_WORK_CHANGED,
    SEGUNDOS_WORK_CHANGED,
    MINUTES_RELAX_CHANGED,
    SEGUNDOS_RELAX_CHANGED,
    MINUTES_COOL_DOWN_CHANGED,
    SEGUNDOS_COOL_DOWN_CHANGED,
    MINUTES_CYCLES_CHANGED,
    SEGUNDOS_CYCLES_CHANGED,
    ADD_SEGUNDOS_PREPARE_CHANGED,
    SUBTRACT_SEGUNDOS_PREPARE_CHANGED,
    ADD_SEGUNDOS_WORK_CHANGED,
    SUBTRACT_SEGUNDOS_WORK_CHANGED,
    ADD_SEGUNDOS_RELAX_CHANGED,
    SUBTRACT_SEGUNDOS_RELAX_CHANGED,
    ADD_SEGUNDOS_COOL_DOWN_CHANGED,
    SUBTRACT_SEGUNDOS_COOL_DOWN_CHANGED,
    ADD_SEGUNDOS_CYCLES_CHANGED,
    SUBTRACT_SEGUNDOS_CYCLES_CHANGED,
    ON_BLUR_SEGUNDOS_PREPARE_CHANGED,
    ON_BLUR_SEGUNDOS_WORK_CHANGED,
    ON_BLUR_SEGUNDOS_RELAX_CHANGED,
    ON_BLUR_SEGUNDOS_COOL_DOWN_CHANGED,
    ON_BLUR_SEGUNDOS_CYCLES_CHANGED,
    ON_BLUR_MINUTES_PREPARE_CHANGED,
    ON_BLUR_MINUTES_WORK_CHANGED,
    ON_BLUR_MINUTES_RELAX_CHANGED,
    ON_BLUR_MINUTES_COOL_DOWN_CHANGED,
    ON_BLUR_MINUTES_CYCLES_CHANGED,
} from '../actions/HomeScreenActions';

const INITIAL_STATE = {
    minutesPrepare: '00',
    segundosPrepare: '00',
    minutesWork: '00',
    segundosWork: '00',
    minutesRelax: '00',
    segundosRelax: '00',
    minutesCoolDown: '00',
    segundosCoolDown: '00',
    minutesCycles: '00',
    segundosCycles: '00',
    totalMinutes: '00',
    totalSegundos: '00',
};

const getAddSegundos = (stateSegundos, stateMinutes, totalSegundos, totalMinutes) => {
    const segundosStateValue = Number(stateSegundos) + 1;
    let totalSeg = (Number(totalSegundos) + 1).toString();
    let totalMin = totalMinutes;
    let minutes = stateMinutes;
    let segundos = segundosStateValue.toString();

    if (totalSeg < 10) {
        totalSeg = `0${totalSeg}`;
    } else if (totalSeg > 59) {
        totalMin = `0${(Number(totalMin) + 1)}`;
        totalSeg = '00';
    }
    if (segundosStateValue < 10) {
        segundos = `0${segundosStateValue.toString()}`;
    } else if (segundosStateValue > 59) {
        minutes = `0${(Number(minutes) + 1)}`;
        segundos = '00';
    }

    return {segundos, minutes, totalSeg, totalMin};
}

const getTwoDigitTimeNumber = (time) => {
    if (time < 10) {
        time = '0' + time.toString();
    } else {
        time = time.toString();
    }

    return time;
} 

const getSubtractSegundos = (stateSegundos, totalSegundos, stateMinutes, totalMinutes) => {
    const segundosNumberStateValue = Number(stateSegundos);
    let minutesNumberStateValue = Number(stateMinutes);
    const isAllZero = segundosNumberStateValue === 0 && minutesNumberStateValue === 0;
    let segundosStateValue = segundosNumberStateValue - 1;
    let totalSeg = Number(totalSegundos);
    let totalMin = Number(totalMinutes);
    let tMinutes = totalMin;
    let tSegundos = totalSeg;
    let segundos = segundosStateValue.toString();
    let minutes;

    if (segundosNumberStateValue === 0 && minutesNumberStateValue > 0) {
        minutes = (minutesNumberStateValue - 1);
        segundos = 59;
    } else if (isAllZero) {
        segundos = 0;
        minutes = 0;
    } else {
        minutes = minutesNumberStateValue;
    }

    if (totalSeg === 0 && totalMin > 0) {
        tMinutes = (totalMin - 1);
        tSegundos = 59;
    } else if (totalSeg === 0 && totalMin === 0) {
        tSegundos = 0;
        tMinutes = 0;
    } else if (isAllZero) {
        tSegundos = totalSeg;
    } else {
        tSegundos = totalSeg - 1;
    }

    tMinutes = getTwoDigitTimeNumber(tMinutes);
    tSegundos = getTwoDigitTimeNumber(tSegundos);

    minutes = getTwoDigitTimeNumber(minutes);
    segundos = getTwoDigitTimeNumber(segundos);

    return {segundos, minutes, tSegundos, tMinutes};
}

const getBlurSecondValues = (min, seg, totalM, totalS) => {
    let minutes = Number(min);
    let segundos = Number(seg);
    let totalSegundos = Number(totalS) + segundos;
    let totalMinutes = Number(totalM);

    if (segundos > 59) {
        minutes += 1;
        segundos = 0;
    }

    if (totalSegundos > 59) {
        totalMinutes += 1;
        totalSegundos = totalSegundos - 60;
    }

    minutes = getTwoDigitTimeNumber(minutes);
    segundos = getTwoDigitTimeNumber(segundos);
    totalMinutes = getTwoDigitTimeNumber(totalMinutes);
    totalSegundos = getTwoDigitTimeNumber(totalSegundos);

    return {minutes, segundos, totalMinutes, totalSegundos}
}

const getBlurMinutesValues = (min, totalM) => {
    let totalMinutes = Number(totalM) + Number(min);

    totalMinutes = getTwoDigitTimeNumber(totalMinutes);

    return {totalMinutes}
}

export default (state = INITIAL_STATE, {type, payload}) => {
    let timeValues;
    let addValues;
    let blurValues;
    let blurMinutesValues;

    switch (type) {
        case MINUTES_PREPARE_CHANGED:
            return {...state, minutesPrepare: payload};
        case SEGUNDOS_PREPARE_CHANGED:
            return {...state, segundosPrepare: payload};
        case MINUTES_WORK_CHANGED:
            return {...state, minutesWork: payload};
        case SEGUNDOS_WORK_CHANGED:
            return {...state, segundosWork: payload};
        case MINUTES_RELAX_CHANGED:
            return {...state, minutesRelax: payload};
        case SEGUNDOS_RELAX_CHANGED:
            return {...state, segundosRelax: payload};
        case MINUTES_COOL_DOWN_CHANGED:
            return {...state, minutesCoolDown: payload};
        case SEGUNDOS_COOL_DOWN_CHANGED:
            return {...state, segundosCoolDown: payload};
        case MINUTES_CYCLES_CHANGED:
            return {...state, minutesCycles: payload};
        case SEGUNDOS_CYCLES_CHANGED:
            return {...state, segundosCycles: payload};
        case ADD_SEGUNDOS_PREPARE_CHANGED:
            addValues = getAddSegundos(
                state.segundosPrepare,
                state.minutesPrepare,
                state.totalSegundos,
                state.totalMinutes,
            );

            return {...state,
                minutesPrepare: addValues.minutes,
                segundosPrepare: addValues.segundos,
                totalMinutes: addValues.totalMin,
                totalSegundos: addValues.totalSeg,
            };
        case SUBTRACT_SEGUNDOS_PREPARE_CHANGED:
            timeValues = getSubtractSegundos(
                state.segundosPrepare,
                state.totalSegundos,
                state.minutesPrepare,
                state.totalMinutes,
            );
            
            return {...state,
                minutesPrepare: timeValues.minutes,
                segundosPrepare: timeValues.segundos,
                totalSegundos: timeValues.tSegundos,
                totalMinutes: timeValues.tMinutes,
            };
        case ADD_SEGUNDOS_WORK_CHANGED:
            addValues = getAddSegundos(
                state.segundosWork,
                state.minutesWork,
                state.totalSegundos,
                state.totalMinutes,
            );

            return {...state,
                minutesWork: addValues.minutes,
                segundosWork: addValues.segundos,
                totalMinutes: addValues.totalMin,
                totalSegundos: addValues.totalSeg,
            };
        case SUBTRACT_SEGUNDOS_WORK_CHANGED:
            timeValues = getSubtractSegundos(
                state.segundosWork,
                state.totalSegundos,
                state.minutesWork,
                state.totalMinutes,
            );
        
            return {...state,
                minutesWork: timeValues.minutes,
                segundosWork: timeValues.segundos,
                totalSegundos: timeValues.tSegundos,
                totalMinutes: timeValues.tMinutes,
            };
        case ADD_SEGUNDOS_RELAX_CHANGED:
            addValues = getAddSegundos(
                state.segundosRelax,
                state.minutesRelax,
                state.totalSegundos,
                state.totalMinutes,
            );

            return {...state,
                minutesRelax: addValues.minutes,
                segundosRelax: addValues.segundos,
                totalMinutes: addValues.totalMin,
                totalSegundos: addValues.totalSeg,
            };
        case SUBTRACT_SEGUNDOS_RELAX_CHANGED:
            timeValues = getSubtractSegundos(
                state.segundosRelax,
                state.totalSegundos,
                state.minutesRelax,
                state.totalMinutes,
            );
        
            return {...state,
                minutesRelax: timeValues.minutes,
                segundosRelax: timeValues.segundos,
                totalSegundos: timeValues.tSegundos,
                totalMinutes: timeValues.tMinutes,
            };
        case ADD_SEGUNDOS_COOL_DOWN_CHANGED:
            addValues = getAddSegundos(
                state.segundosCoolDown,
                state.minutesCoolDown,
                state.totalSegundos,
                state.totalMinutes,
            );

            return {...state,
                minutesCoolDown: addValues.minutes,
                segundosCoolDown: addValues.segundos,
                totalMinutes: addValues.totalMin,
                totalSegundos: addValues.totalSeg,
            };
        case SUBTRACT_SEGUNDOS_COOL_DOWN_CHANGED:
            timeValues = getSubtractSegundos(
                state.segundosCoolDown,
                state.totalSegundos,
                state.minutesCoolDown,
                state.totalMinutes,
            );
        
            return {...state,
                minutesCoolDown: timeValues.minutes,
                segundosCoolDown: timeValues.segundos,
                totalSegundos: timeValues.tSegundos,
                totalMinutes: timeValues.tMinutes,
            };
        case ADD_SEGUNDOS_CYCLES_CHANGED:
            addValues = getAddSegundos(
                state.segundosCycles,
                state.minutesCycles,
                state.totalSegundos,
                state.totalMinutes,
            );

            return {...state,
                minutesCycles: addValues.minutes,
                segundosCycles: addValues.segundos,
                totalMinutes: addValues.totalMin,
                totalSegundos: addValues.totalSeg,
            };
        case SUBTRACT_SEGUNDOS_CYCLES_CHANGED:
            timeValues = getSubtractSegundos(
                state.segundosCycles,
                state.totalSegundos,
                state.minutesCycles,
                state.totalMinutes,
            );
        
            return {...state,
                minutesCycles: timeValues.minutes,
                segundosCycles: timeValues.segundos,
                totalSegundos: timeValues.tSegundos,
                totalMinutes: timeValues.tMinutes,
            };
        case ON_BLUR_SEGUNDOS_PREPARE_CHANGED:
            blurValues = getBlurSecondValues(
                state.minutesPrepare,
                state.segundosPrepare,
                state.totalMinutes,
                state.totalSegundos,
            );

            return {...state,
                minutesPrepare: blurValues.minutes,
                segundosPrepare: blurValues.segundos,
                totalMinutes: blurValues.totalMinutes,
                totalSegundos: blurValues.totalSegundos,
            }
        case ON_BLUR_SEGUNDOS_WORK_CHANGED:
            blurValues = getBlurSecondValues(
                state.minutesWork,
                state.segundosWork,
                state.totalMinutes,
                state.totalSegundos,
            );

            return {...state,
                minutesWork: blurValues.minutes,
                segundosWork: blurValues.segundos,
                totalMinutes: blurValues.totalMinutes,
                totalSegundos: blurValues.totalSegundos,
            }
        case ON_BLUR_SEGUNDOS_RELAX_CHANGED:
            blurValues = getBlurSecondValues(
                state.minutesRelax,
                state.segundosRelax,
                state.totalMinutes,
                state.totalSegundos,
            );

            return {...state,
                minutesRelax: blurValues.minutes,
                segundosRelax: blurValues.segundos,
                totalMinutes: blurValues.totalMinutes,
                totalSegundos: blurValues.totalSegundos,
            }
        case ON_BLUR_SEGUNDOS_COOL_DOWN_CHANGED:
            blurValues = getBlurSecondValues(
                state.minutesCoolDown,
                state.segundosCoolDown,
                state.totalMinutes,
                state.totalSegundos,
            );

            return {...state,
                minutesCoolDown: blurValues.minutes,
                segundosCoolDown: blurValues.segundos,
                totalMinutes: blurValues.totalMinutes,
                totalSegundos: blurValues.totalSegundos,
            }
        case ON_BLUR_SEGUNDOS_CYCLES_CHANGED:
            blurValues = getBlurSecondValues(
                state.minutesCycles,
                state.segundosCycles,
                state.totalMinutes,
                state.totalSegundos,
            );

            return {...state,
                minutesCycles: blurValues.minutes,
                segundosCycles: blurValues.segundos,
                totalMinutes: blurValues.totalMinutes,
                totalSegundos: blurValues.totalSegundos,
            }
        
        case ON_BLUR_MINUTES_PREPARE_CHANGED:
            blurMinutesValues = getBlurMinutesValues(
                state.minutesPrepare,
                state.totalMinutes,
            );

            return {...state, totalMinutes: blurMinutesValues.totalMinutes}
        case ON_BLUR_MINUTES_WORK_CHANGED:
            blurMinutesValues = getBlurMinutesValues(
                state.minutesWork,
                state.totalMinutes,
            );

            return {...state, totalMinutes: blurMinutesValues.totalMinutes}
        case ON_BLUR_MINUTES_RELAX_CHANGED:
            blurMinutesValues = getBlurMinutesValues(
                state.minutesRelax,
                state.totalMinutes,
            );

            return {...state, totalMinutes: blurMinutesValues.totalMinutes}
        case ON_BLUR_MINUTES_COOL_DOWN_CHANGED:
            blurMinutesValues = getBlurMinutesValues(
                state.minutesCoolDown,
                state.totalMinutes,
            );

            return {...state, totalMinutes: blurMinutesValues.totalMinutes}
        case ON_BLUR_MINUTES_CYCLES_CHANGED:
            blurMinutesValues = getBlurMinutesValues(
                state.minutesCycles,
                state.totalMinutes,
            );

            return {...state, totalMinutes: blurMinutesValues.totalMinutes}
        default:
            return state;
    }
}
