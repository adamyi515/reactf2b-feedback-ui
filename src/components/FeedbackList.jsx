import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

// Components
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {
    const { feedbackData, onDeleteFeedbackItem } = useContext(FeedbackContext);

    return (
        <div className='feedback-list'>
            {
                feedbackData.length > 0 ? (
                    <>
                        {feedbackData.map(item => <FeedbackItem item={item} 
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
