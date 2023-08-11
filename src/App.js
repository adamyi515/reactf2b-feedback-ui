import React, { useEffect, useState } from 'react'
import Header from './components/Header'

// Dummy data
import { data } from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
    const [feedbackData, setFeedbackData] = useState(data);
    
    const deleteFeedbackItem = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedbackData(feedbackData.filter(item => item.id !== id));
        }
    }

    return (
        <>
            <Header text='Feedback UI' />
            <div className='container'>
                <FeedbackForm />
                <FeedbackStats feedbackItems={feedbackData} />
                <FeedbackList feedbackItems={feedbackData}
                    onDeleteFeedbackItem={deleteFeedbackItem} />
            </div>
        </>
    )
}

export default App