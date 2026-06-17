import initialActivities from '../data/activities'
import { useState } from 'react'

function useActivities() {
    const [activities, setActivities] = useState(initialActivities)

    function increment(id) {
        setActivities(prev => 
            prev.map(activity => 
                activity.id === id ? {...activity, current: activity.current + 1} : activity
                
            )
        )
    }
    function decrement(id) {
        
            setActivities(prev => 
                prev.map(activity => 
                    activity.id === id ? {...activity, current: Math.max(0, activity.current - 1)} : activity
                )
            )
    }

    function reset(id) {
        setActivities(prev => 
            prev.map(activity => 
                activity.id === id ? {...activity, current: 0} : activity
            )
        )
    }

    return {
        activities,
        increment,
        decrement,
        reset
    }

}

export default useActivities