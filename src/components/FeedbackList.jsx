import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedbackItems, onDeleteFeedbackItem }) => {
    return (
        <div className='feedback-list'>
            {feedbackItems.map(item => (
                <FeedbackItem key={item.id} item={item} onDeleteFeedbackItem={onDeleteFeedbackItem} />
            ))}
        </div>
    )
}


export default FeedbackList
