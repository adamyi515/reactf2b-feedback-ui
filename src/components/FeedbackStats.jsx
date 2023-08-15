import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';


const FeedbackStats = () => {
    const { feedbacksData } = useContext(FeedbackContext);


    // Calculate the average rating.
    let averageRating = feedbacksData.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedbacksData.length;

    averageRating = averageRating.toFixed(2);


    return (
        <div className='feedback-stats'>
            <h4>{ feedbacksData.length } Reviews</h4>
            <h4>Average rating: { isNaN(averageRating) ? 0 : averageRating }</h4>
        </div>
    )
}

export default FeedbackStats
