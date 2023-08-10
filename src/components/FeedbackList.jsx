import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedbackItems, onDeleteFeedbackItem }) => {
    return (
        <div className='feedback-list'>
            {
                feedbackItems.length > 0 ? (
                    <>
                        {feedbackItems.map(item => <FeedbackItem item={item} 
                            onDeleteFeedbackItem={onDeleteFeedbackItem}/>)}
                    </>
                ) : (
                    <>
                        <h1>No feedback items yet</h1>
                    </>
                )
            }            
        </div>
    )
}


export default FeedbackList
