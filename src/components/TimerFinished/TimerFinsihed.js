import { connect } from "react-redux";
import { Button } from "../TimerInProgress/StyledTimerInProgres";
import { setTimerIsActive, timerIsOver} from '../../redux/timer-reducer'


const TimerFinished = (props) => {
    const diactiveTimer = () => {
        if(props.isActive && props.isOver) {
            props.setTimerIsActive(false);
            props.timerIsOver(false);
        }
    }

    return(
        <div>
            <h2 style={{marginTop: '0'}}>Timer done!</h2>
            <Button onClick={diactiveTimer}>DISSMISS</Button>
        </div>
    )
}

const mapStateToProp = (state) => ({
    isActive: state.isActive,
    isOver: state.isOver
})

export default connect(mapStateToProp, {setTimerIsActive, timerIsOver})(TimerFinished)