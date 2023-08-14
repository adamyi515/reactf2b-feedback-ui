import React, { useEffect } from 'react'

// Context API
import { FeedbackProvider } from './context/FeedbackContext';

// React router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header'
import AboutPage from './pages/AboutPage';

// Dummy data
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

const App = () => {

    return (
        <FeedbackProvider>
            <Router>
                <Header text='Feedback UI' />
                <div className='container'>
                    <Routes>
                        <Route path='/' exact element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
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