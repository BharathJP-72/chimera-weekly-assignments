import ActivityCard from '../ActivityCard/ActivityCard'
import './ActivityGrid.css'
import PropTypes from 'prop-types'

function ActivityGrid({
  activities,
  increment,
  decrement,
  reset
}) {
    return(
        <div className='activity-grid'>
            {
                activities.map((activity) => (
                    <ActivityCard
                        key={activity.id}
                        activity={activity}
                        increment={increment}
                        decrement={decrement}
                        reset={reset}
                    />
                    )
                )
            }
        </div>
    )
}

ActivityGrid.propTypes = {
    activities: PropTypes.arrayOf(
        PropTypes.shape({

            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            icon: PropTypes.elementType,
            target: PropTypes.number.isRequired,
            current: PropTypes.number.isRequired
            
        })
    ).isRequired,

    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired

}

export default ActivityGrid