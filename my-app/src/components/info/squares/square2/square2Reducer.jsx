const initialState = {
    a: 0,
    b: 0,
    result: 0
}

export const square2Reducer = function (state = initialState, action) {
    switch (action.type) {
        case 'setA':
            return {
                ...state,
                a: action.payload
            }
        case 'setB':
            return {
                ...state,
                b: action.payload
            }
        case 'calcResult':
            return {
                ...state,
                result: state.a + state.b
            }
        case 'reset':
            return {
                ...state,
                a: 0,
                b: 0,
                result: 0
            }
        default: return state
    }
}

export const setA = (a) => ({ type: 'setA', payload: a });
export const setB = (b) => ({ type: 'setB', payload: b });
export const setResult = () => ({ type: 'calcResult' });
export const reset = () => ({ type: 'reset' });


