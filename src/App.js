import React, { useEffect, useState } from 'react'

// React router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header'
import AboutPage from './pages/AboutPage';

// Dummy data
import { data } from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
    const [feedbackData, setFeedbackData] = useState(data);

    // Event handlers //////////////////////////////////////////////////////////////
    const deleteFeedbackItem = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedbackData(feedbackData.filter(item => item.id !== id));
        }
    }

    const addFeedbackItem = (newItem) => {
        setFeedbackData([...feedbackData, newItem]);
    }

    return (
        <Router>
            <Header text='Feedback UI' />
            <div className='container'>
                <Routes>
                    <Route path='/' exact element={
                        <>
                            <FeedbackForm onAddFeedbackItem={addFeedbackItem} />
                            <FeedbackStats feedbackItems={feedbackData} />
                            <FeedbackList feedbackItems={feedbackData}
                                onDeleteFeedbackItem={deleteFeedbackItem}
                                />
                        </>
                    } />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App