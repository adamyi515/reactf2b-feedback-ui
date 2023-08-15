import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbacksData, setFeedbacksData] = useState([]);
    const [feedbackEditData, setFeedbacEditData] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    // Functions //////////////////////////////////////////////////
    const fetchFeedbacks = async () => {
        const response = await fetch(`http://localhost:5000/feedbacks?_sort=id`);
        const data = await response.json();
        setFeedbacksData(data);
    }

    const deleteFeedbackItem = async (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            await fetch(`http://localhost:5000/feedbacks/${id}`, {
                method: 'DELETE',
            });

            setFeedbacksData(feedbacksData.filter(item => item.id !== id));
        }
    }

    const addFeedbackItem = async (newItem) => {
        const response = await fetch(`http://localhost:5000/feedbacks`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        });

        const data = await response.json();
        setFeedbacksData([...feedbacksData, data]);
    }

    const updateFeedbackItem = async (id, editedItem) => {
        const response = await fetch(`http://localhost:5000/feedbacks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(editedItem)
        });

        const data = await response.json();
        console.log(data);

        setFeedbacksData(feedbacksData.map(item => {
            if(item.id === id){
                return {
                    ...item,
                    ...data
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