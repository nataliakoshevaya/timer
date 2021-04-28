import React from "react";
import { connect } from "react-redux";
import { setMinutes, setSeconds, setTimerIsActive, setTimerOnPause, timerIsOver } from "../../redux/timer-reducer";
import TimerFinished from "../TimerFinished/TimerFinsihed";
import { TimerWrapper, ButtonWrapper, Button } from "../TimerInProgress/StyledTimerInProgres";

class TimerInProgress extends React.Component {
    timerInterval = () => {
        const {minutes, seconds} = this.props
        if(this.props.isActive) {     
            if (seconds > 0) {
                this.props.setSeconds(seconds - 1);
            }

            if(seconds === 0) {
                this.props.setMinutes(minutes - 1);
                this.props.setSeconds(59);
            }

            if(minutes === 0 && seconds === 0) {
                this.props.timerIsOver(true);
                this.props.setMinutes(0);
                this.props.setSeconds(0);
            }
        }
    }
 
    componentDidMount() {
        this.timer = setInterval(this.timerInterval, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

   onPause = () => {
       if(this.props.isActive) {
            this.props.setTimerOnPause(true);
            this.props.setMinutes(this.props.minutes);
            this.props.setSeconds(this.props.seconds);
            clearInterval(this.timer);
       }
   } 

   onReset = () => {
        this.props.setTimerIsActive(false);
        this.props.setMinutes(0);
        this.props.setSeconds(0);
   }

   onStart = () => {
        this.props.setTimerIsActive(true);
        this.props.setTimerOnPause(false);
        this.timer = setInterval(this.timerInterval, 1000);
   }
    
   render() {
    const { minutes, seconds, onPause, isOver } = this.props;
    return(
        <div>
            {isOver ? <TimerFinished /> : 
            <div>
                <div style={{width: '400px'}}>
                <TimerWrapper>
                    <div>
                        Minutes
                        
                        <div>{(minutes < 10) ? `0${minutes}` : `${minutes}`}</div>
                    </div>
                    <div>
                        Seconds 
                        <div>{(seconds < 10) ? `0${seconds}` : `${seconds}`}</div>
                    </div>
                </TimerWrapper>
                <ButtonWrapper>
                    {onPause ? 
                        <Button onClick={this.onStart}>Start</Button> :
                        <Button onClick={this.onPause}>Pause</Button> }
                    <Button onClick={this.onReset}>Reset</Button>
                </ButtonWrapper>
                </div>
            </div>}
        </div>
    )}
}

let mapStateToProp = (state) => ({
    minutes: state.minutes,
    seconds: state.seconds,
    isActive: state.isActive,
    onPause: state.onPause,
    isOver: state.isOver
})

let ContainerTimerInProgress = connect(mapStateToProp, 
                                { setMinutes, setSeconds, 
                                setTimerIsActive, setTimerOnPause, 
                                timerIsOver})(TimerInProgress)

export default ContainerTimerInProgress;
