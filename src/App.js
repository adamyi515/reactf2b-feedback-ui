import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

// Dummy data
import { data } from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

const App = () => {
    const [feedbackData, setFeedbackData] = useState(data);

    const deleteFeedbackItem = (id) => {
        setFeedbackData(feedbackData.filter(item => item.id !== id));
    }

    return (
        <>
            <Header text='Feedback UI' />
            <div className='container'>
                <FeedbackList feedbackItems={feedbackData}
                    onDeleteFeedbackItem={deleteFeedbackItem} />
            </div>
        </>
    )
}

export default App