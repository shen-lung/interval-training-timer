export const MINUTES_PREPARE_CHANGED = 'MINUTES_PREPARE_CHANGED';
export const SEGUNDOS_PREPARE_CHANGED = 'SEGUNDOS_PREPARE_CHANGED';
export const MINUTES_WORK_CHANGED = 'MINUTES_WORK_CHANGED';
export const SEGUNDOS_WORK_CHANGED = 'SEGUNDOS_WORK_CHANGED';
export const MINUTES_RELAX_CHANGED = 'MINUTES_RELAX_CHANGED';
export const SEGUNDOS_RELAX_CHANGED = 'SEGUNDOS_RELAX_CHANGED';
export const MINUTES_COOL_DOWN_CHANGED = 'MINUTES_COOL_DOWN_CHANGED';
export const SEGUNDOS_COOL_DOWN_CHANGED = 'SEGUNDOS_COOL_DOWN_CHANGED';
export const MINUTES_CYCLES_CHANGED = 'MINUTES_CYCLES_CHANGED';
export const SEGUNDOS_CYCLES_CHANGED = 'SEGUNDOS_CYCLES_CHANGED';

export const minutesPrepareChanged = (minutes) => {
    return {
        type: MINUTES_PREPARE_CHANGED,
        payload: minutes
    };
};

export const segundosPrepareChanged = (segundos) => {
    return {
        type: SEGUNDOS_PREPARE_CHANGED,
        payload: segundos
    };
};

export const minutesWorkChanged = (minutes) => {
    return {
        type: MINUTES_WORK_CHANGED,
        payload: minutes
    };
};

export const segundosWorkChanged = (segundos) => {
    return {
        type: SEGUNDOS_WORK_CHANGED,
        payload: segundos
    };
};

export const minutesRelaxChanged = (minutes) => {
    return {
        type: MINUTES_RELAX_CHANGED,
        payload: minutes
    };
};

export const segundosRelaxChanged = (segundos) => {
    return {
        type: SEGUNDOS_RELAX_CHANGED,
        payload: segundos
    };
};

export const minutesCoolDownChanged = (minutes) => {
    return {
        type: MINUTES_COOL_DOWN_CHANGED,
        payload: minutes
    };
};

export const segundosCoolDownChanged = (segundos) => {
    return {
        type: SEGUNDOS_COOL_DOWN_CHANGED,
        payload: segundos
    };
};

export const minutesCyclesChanged = (minutes) => {
    return {
        type: MINUTES_CYCLES_CHANGED,
        payload: minutes
    };
};

export const segundosCyclesChanged = (segundos) => {
    return {
        type: SEGUNDOS_CYCLES_CHANGED,
        payload: segundos
    };
};

export const ADD_SEGUNDOS_PREPARE_CHANGED = 'ADD_SEGUNDOS_PREPARE_CHANGED';
export const SUBTRACT_SEGUNDOS_PREPARE_CHANGED = 'SUBTRACT_SEGUNDOS_PREPARE_CHANGED';
export const ADD_SEGUNDOS_WORK_CHANGED = 'ADD_SEGUNDOS_WORK_CHANGED';
export const SUBTRACT_SEGUNDOS_WORK_CHANGED = 'SUBTRACT_SEGUNDOS_WORK_CHANGED';
export const ADD_SEGUNDOS_RELAX_CHANGED = 'ADD_SEGUNDOS_RELAX_CHANGED';
export const SUBTRACT_SEGUNDOS_RELAX_CHANGED = 'SUBTRACT_SEGUNDOS_RELAX_CHANGED';
export const ADD_SEGUNDOS_COOL_DOWN_CHANGED = 'ADD_SEGUNDOS_COOL_DOWN_CHANGED';
export const SUBTRACT_SEGUNDOS_COOL_DOWN_CHANGED = 'SUBTRACT_SEGUNDOS_COOL_DOWN_CHANGED';
export const ADD_SEGUNDOS_CYCLES_CHANGED = 'ADD_SEGUNDOS_CYCLES_CHANGED';
export const SUBTRACT_SEGUNDOS_CYCLES_CHANGED = 'SUBTRACT_SEGUNDOS_CYCLES_CHANGED';

export const addSegundosPrepareChanged = (segundos) => {
    return {
        type: ADD_SEGUNDOS_PREPARE_CHANGED,
        payload: segundos
    };
};

export const subtractSegundosPrepareChanged = (segundos) => {
    return {
        type: SUBTRACT_SEGUNDOS_PREPARE_CHANGED,
        payload: segundos
    };
};

export const addSegundosWorkChanged = (segundos) => {
    return {
        type: ADD_SEGUNDOS_WORK_CHANGED,
        payload: segundos
    };
};

export const subtractSegundosWorkChanged = (segundos) => {
    return {
        type: SUBTRACT_SEGUNDOS_WORK_CHANGED,
        payload: segundos
    };
};

export const addSegundosRelaxChanged = (segundos) => {
    return {
        type: ADD_SEGUNDOS_RELAX_CHANGED,
        payload: segundos
    };
};

export const subtractSegundosRelaxChanged = (segundos) => {
    return {
        type: SUBTRACT_SEGUNDOS_RELAX_CHANGED,
        payload: segundos
    };
};

export const addSegundosCoolDownChanged = (segundos) => {
    return {
        type: ADD_SEGUNDOS_COOL_DOWN_CHANGED,
        payload: segundos
    };
};

export const subtractSegundosCoolDownChanged = (segundos) => {
    return {
        type: SUBTRACT_SEGUNDOS_COOL_DOWN_CHANGED,
        payload: segundos
    };
};

export const addSegundosCyclesChanged = (segundos) => {
    return {
        type: ADD_SEGUNDOS_CYCLES_CHANGED,
        payload: segundos
    };
};

export const subtractSegundosCyclesChanged = (segundos) => {
    return {
        type: SUBTRACT_SEGUNDOS_CYCLES_CHANGED,
        payload: segundos
    };
};
