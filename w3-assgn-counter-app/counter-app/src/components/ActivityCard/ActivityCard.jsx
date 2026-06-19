import ProgressBar from '../ProgressBar/ProgressBar'
import './ActivityCard.css'
import {toast} from 'react-toastify'
import PropTypes from 'prop-types'
import { SmilePlus, Smile, Frown } from 'lucide-react'


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
            let MoodIcon

            if (percentage >= 75) {

                mood = 'Excellent'
                statusColor = '#2e7d32'
                MoodIcon = SmilePlus

            }

            else if (percentage >= 35) {

                mood = 'Keep Going'
                statusColor = '#ef6c00'
                MoodIcon = Smile

            }

            else {

                mood = 'Behind Schedule'
                statusColor = '#c62828'
                MoodIcon = Frown

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
                
                <span className='activity-icon'> 
                    {icon && (() => {
                        const IconComponent = icon;
                        return <IconComponent size={32} />;
                    })()}
                </span>

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
                        color: statusColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                    }}
                >
                    <MoodIcon size={20} />
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

ActivityCard.propTypes = {
    activity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.elementType,
        target: PropTypes.number.isRequired,
        current: PropTypes.number.isRequired
    }).isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired

}

export default ActivityCard


