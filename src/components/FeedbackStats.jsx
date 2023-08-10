import React, { useEffect } from 'react'

const FeedbackStats = ({ feedbackItems }) => {
    // Calculate the average rating.
    let averageRating = feedbackItems.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedbackItems.length;

    averageRating = averageRating.toFixed(2);


    return (
        <div className='feedback-stats'>
            <h4>{ feedbackItems.length } Reviews</h4>
            <h4>Average rating: { isNaN(averageRating) ? 0 : averageRating }</h4>
        </div>
    )
}

export default FeedbackStats
