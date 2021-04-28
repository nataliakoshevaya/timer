const SET_MINUTES = 'CHANGE_MINUTES';
const SET_SECONDS = 'CHANGE_SECONDS';
const TIMER_IS_ACTIVE = 'TIMER_IS_ACTIVE';
const TIMER_ON_PAUSE = 'TIMER_ON_PAUSE';
const TIMER_IS_OVER = 'TIMER_IS_OVER';


const initialState = {
    minutes: 0,
    seconds: 0,
    isActive: false,
    isTimerDone: false,
    onPause: false,
    isOver: false
};

const timerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MINUTES: {
            return {
                ...state,
                minutes: action.minutes
            }
        }
        case SET_SECONDS: {
            return {
                ...state,
                seconds: action.seconds
            }
        }
        case TIMER_IS_ACTIVE: {
            return {
                ...state,
                isActive: action.isActive
            }
        }
        case TIMER_ON_PAUSE: {
            return {
                ...state,
                onPause: action.onPause
            }
        }
        case TIMER_IS_OVER: {
            return {
                ...state,
                isOver: action.isOver
            }
        }
        default: 
        return state
    } 
};

export const setMinutes = (minutes) => ({ type: SET_MINUTES, minutes });

export const setSeconds = (seconds) => ({ type: SET_SECONDS, seconds });

export const setTimerIsActive = (isActive) => ({ type: TIMER_IS_ACTIVE, isActive });

export const timerIsOver = (isOver) => ({ type: TIMER_IS_OVER, isOver });

export const setTimerOnPause = (onPause) => ({type: TIMER_ON_PAUSE, onPause});

export default timerReducer;