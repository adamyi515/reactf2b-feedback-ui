import React, { useEffect, useState } from 'react'

// Context API
import { FeedbackProvider } from './context/FeedbackContext';

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
import AboutIconLink from './components/AboutIconLink';

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
        <FeedbackProvider>
            <Router>
                <Header text='Feedback UI' />
                <div className='container'>
                    <Routes>
                        <Route path='/' exact element={
                            <>
                                <FeedbackForm onAddFeedbackItem={addFeedbackItem} />
                                <FeedbackStats />
                                <FeedbackList 
                                    onDeleteFeedbackItem={deleteFeedbackItem}
                                    />
                            </>
                        } />
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>

                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App