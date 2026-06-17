import ActivityCard from '../ActivityCard/ActivityCard'
import './ActivityGrid.css'

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

export default ActivityGrid