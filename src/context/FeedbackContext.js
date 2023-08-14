import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbackData, setFeedbackData] = useState({
        id: 1,
        rating: 8,
        text: 'This is a dummy data from the Context file'
    })

    return(
        <FeedbackContext.Provider value={{
            feedbackData
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;