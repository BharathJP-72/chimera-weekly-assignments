import './ProgressBar.css'

function ProgressBar({current, target}) {
    const percentage = Math.min(((current/target) * 100), 100) 

    return(
        <div className='progress-bar'>
            <div className='progress-fill' style={{ width: `${percentage}%`}}>

            </div>
        </div>
    )
}

export default ProgressBar