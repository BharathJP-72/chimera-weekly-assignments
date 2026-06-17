import ProgressBar from '../ProgressBar/ProgressBar'
import './ActivityCard.css'
import {toast} from 'react-toastify'

function ActivityCard({
    activity, 
    increment,
    decrement,
    reset}) {
    const {
                title,
                description,
                icon,
                target,
                current,
                id
            } = activity

            const percentage = (current / target) * 100

            let mood 
            let statusColor

            if (percentage >= 75) {

                mood = '😎 Excellent'
                statusColor = '#2e7d32'

            }

            else if (percentage >= 35) {

                mood = '🙂 Keep Going'
                statusColor = '#ef6c00'

            }

            else {

                mood = '😴 Behind Schedule'
                statusColor = '#c62828'

            }

            function startPomodoro() {
                toast.info(
                    'Pomodoro started!'
                )

                setTimeout(() => {
                    toast.success(
                        'Pomodoro completed!'
                    )
                }, 10000);
            }

    return (
        
        <div className='activity-card'>
                
                <span> {icon} </span>

                <h2>{title}</h2>
                <p>
                    {description}
                </p>
                <h3> {current}/{target} </h3>
                <ProgressBar 
                        current={current}
                        target={target}
                    />

                <p
                    className='status-text'
                    style={{
                        color: statusColor
                    }}
                >
                    {mood}
                </p>
                
                <div className='button-group'>

                    <button onClick={() => decrement(id)}>
                        -
                    </button>
                    <button onClick={() => increment(id)}>
                        +
                    </button>
                    <button onClick={() => reset(id)}>
                        Reset
                    </button>
                    
                </div>
                 {
                        
                        title === 'Pomodoro'
                        &&
                        <button
                            className='pomodoro-btn'
                            onClick={startPomodoro}
                        >
                            Start Pomodoro
                        </button>
                }
                
        </div>
    )
}

export default ActivityCard


