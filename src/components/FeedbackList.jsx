import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

// Components
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {
    const { feedbacksData } = useContext(FeedbackContext);

    return (
        <div className='feedback-list'>
            {
                feedbacksData.length > 0 ? (
                    <>
                        {feedbacksData.map(item => <FeedbackItem item={item} key={item.id}/>)}
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
