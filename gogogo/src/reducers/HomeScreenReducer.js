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
        totalMin = (Number(totalMin) + 1).toString();
        totalSeg = '00';
    }
    if (segundosStateValue < 10) {
        segundos = `0${segundosStateValue.toString()}`;
    } else if (segundosStateValue > 59) {
        minutes = (Number(minutes) + 1).toString();
        segundos = '00';
    }

    return {segundos, minutes, totalSeg, totalMin};
}

const getSubtractSegundos = (stateSegundos, totalSegundos, stateMinutes) => {
    const segundosNumberStateValue = Number(stateSegundos);
    let minutesNumberStateValue = Number(stateMinutes);
    let minutes = null;
    let segundosStateValue = segundosNumberStateValue - 1;
    let totalSeg = Number(totalSegundos) - 1;
    let segundos = segundosStateValue.toString();

    if (segundosNumberStateValue === 0 && minutesNumberStateValue > 0) {
        minutes = (minutesNumberStateValue - 1);
        segundos = 59;
    } else if (segundosNumberStateValue === 0 && minutesNumberStateValue === 0) {
        segundos = 0;
        minutes = 0;
    } else {
        minutes = minutesNumberStateValue;
    }

    if (minutes < 10) {
        minutes = '0' + minutes.toString();
    } else {
        minutes = minutes.toString();
    }
    
    if (segundos < 10) {
        segundos = '0' + segundos.toString();
    } else {
        segundos = segundos.toString();
    }
    
    if (totalSeg <= 0) {
        totalSeg = '00';
    } else if (totalSeg < 10) {
        totalSeg = '0' + totalSeg.toString();
    }

    return {segundos, totalSeg, minutes};
}

const getTotalSegundosTime = (totalSegundos, segundos) => {
    return (Number(totalSegundos) + Number(segundos));
}

// const getTotalSegundosTime = (totalSegundos, segundos) => {
//     const segTotal = (
//         Number(state.segundosPrepare) +
//         Number(state.segundosWork) +
//         Number(state.segundosRelax) +
//         Number(state.segundosCoolDown) +
//         Number(state.segundosCycles)
//     );

//     return ({minTotal, segTotal});
// }

export default (state = INITIAL_STATE, {type, payload}) => {
    let segundosValues;
    let addValues;

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
            segundosValues = getSubtractSegundos(
                state.segundosPrepare,
                state.totalSegundos,
                state.minutesPrepare,
            );
            
            return {...state,
                minutesPrepare: segundosValues.minutes,
                segundosPrepare: segundosValues.segundos,
                totalSegundos: segundosValues.totalSeg
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
            segundosValues = getSubtractSegundos(state.segundosWork, state.totalSegundos);
        
            return {...state,
                segundosWork: segundosValues.segundos,
                totalSegundos: segundosValues.totalSeg,
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
            segundosValues = getSubtractSegundos(state.segundosRelax, state.totalSegundos);
        
            return {...state,
                segundosRelax: segundosValues.segundos,
                totalSegundos: segundosValues.totalSeg,
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
            segundosValues = getSubtractSegundos(state.segundosCoolDown, state.totalSegundos);
        
            return {...state,
                segundosCoolDown: segundosValues.segundos,
                totalSegundos: segundosValues.totalSeg,
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
            segundosValues = getSubtractSegundos(state.segundosCycles, state.totalSegundos);
        
            return {...state,
                segundosCycles: segundosValues.segundos,
                totalSegundos: segundosValues.totalSeg,
            };
        default:
            return state;
    }
}
