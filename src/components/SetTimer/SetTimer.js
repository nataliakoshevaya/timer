import React from "react";
import { connect } from "react-redux";
import { setMinutes, setSeconds, setTimerIsActive } from "../../redux/timer-reducer";
import ContainerTimerInProgress from "../TimerInProgress/TimerInProgress";
import { Input, WapperButton, ButtonIsActive, BtnChangeNum } from './StyledSetTimer'

const SetTimer = (props) => {
    const increaseMinutes = () => {
        props.setMinutes(props.minutes + 1);

        if (props.minutes === 60) {
            props.setMinutes(0);
        }
    }

    const decreaseMinutes = () => {
        if (props.minutes > 0) {
            props.setMinutes(props.minutes - 1);
        }
    }

    const increaseSeconds = () => {
        props.setSeconds(props.seconds + 1);

        if (props.seconds === 59) {
            props.setSeconds(0);
            props.setMinutes(props.minutes + 1);
        }
    }

    const decreaseSeconds = () => {
        if (props.seconds > 0) {
            props.setSeconds(props.seconds - 1);
        }
    }

    const startTimer = () => {
        if(props.minutes > 0 || props.seconds > 0) {
            props.setTimerIsActive(true);
        }
    }

    const onChangeMinutes = (e) => {
        let time = e.target.value
        if(time >= 0 && time <= 60) {
            props.setMinutes(time);
        }
    }

    const onChangeSeconds = (e) => {
        let time = e.target.value
        if(time >= 0 && time <= 60) {
            props.setSeconds(time);
        }
    }

    return (
        <>
           {props.isActive ? <ContainerTimerInProgress /> :
                <div>
                    <div>
                        <BtnChangeNum 
                            onClick={increaseMinutes}
                            
                        >+</BtnChangeNum>
                            <Input 
                                onChange={onChangeMinutes}
                                value = {props.minutes}  />
                        <BtnChangeNum onClick={decreaseMinutes}>-</BtnChangeNum>
                    </div>
                    <div>
                        <BtnChangeNum onClick={increaseSeconds}>+</BtnChangeNum>
                            <Input 
                                    onChange={onChangeSeconds}
                                    value={props.seconds}
                                     />
                        <BtnChangeNum onClick={decreaseSeconds}>-</BtnChangeNum>
                    </div>
                    <WapperButton>
                        <ButtonIsActive onClick={startTimer}>Start</ButtonIsActive>
                    </WapperButton>
                </div>
              
           }
        </>
    )
}


let mapStateToProp = (state) => ({
    minutes: state.minutes,
    seconds: state.seconds,
    isActive: state.isActive,
    isFinished: state.isFinished
})

let ContainerSetTimer = connect(mapStateToProp, { setMinutes, setSeconds, setTimerIsActive })(SetTimer)

export default ContainerSetTimer;
