import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbackData, setFeedbackData] = useState([{
        id: 1,
        rating: 8,
        text: 'This is a dummy data from the Context file'
    }])

    // Event Handlers //////////////////////////////////
    const deleteFeedbackItem = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedbackData(feedbackData.filter(item => item.id !== id));
        }
    }

    const addFeedbackItem = (newItem) => {
        setFeedbackData([...feedbackData, newItem]);
    }



    return(
        <FeedbackContext.Provider value={{
            feedbackData,
            onDeleteFeedbackItem: deleteFeedbackItem,
            onAddFeedbackItem: addFeedbackItem
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;