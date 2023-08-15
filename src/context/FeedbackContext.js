import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbacksData, setFeedbacksData] = useState([]);

    const [feedbackEditData, setFeedbacEditData] = useState({
        item: {},
        edit: false
    })

    // Event Handlers //////////////////////////////////
    const deleteFeedbackItem = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedbacksData(feedbacksData.filter(item => item.id !== id));
        }
    }

    const addFeedbackItem = (newItem) => {
        newItem.id = uuidv4();
        setFeedbacksData([...feedbacksData, newItem]);
    }

    const updateFeedbackItem = (id, editedItem) => {
        setFeedbacksData(feedbacksData.map(item => {
            if(item.id === id){
                return {
                    ...item,
                    ...editedItem
                }
            } else {
                return item;
            }
        }))
    }

    const editFeedbackItem = (item) => {
        setFeedbacEditData({
            item,
            edit: true
        })
    }

    return(
        <FeedbackContext.Provider value={{
            feedbacksData,
            feedbackEditData,
            onDeleteFeedbackItem: deleteFeedbackItem,
            onAddFeedbackItem: addFeedbackItem,
            onEditFeedbackItem: editFeedbackItem,
            onUpdateFeedbackItem: updateFeedbackItem
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;