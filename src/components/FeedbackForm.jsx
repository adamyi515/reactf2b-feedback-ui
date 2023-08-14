import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import FeedbackContext from '../context/FeedbackContext';

import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [isDisabled, setIsDisabled] = useState(true);
    const [msg, setMsg] = useState(null);

    const { onAddFeedbackItem } = useContext(FeedbackContext);
    
    // Event handlers //////////////////////////////////
    const handleChange = ev => {
        setText(ev.target.value)

        if(ev.target.value.length === 0){
            setMsg(null);
            setIsDisabled(true);
        } else if(ev.target.value.length < 10){
            setMsg('Text must be at least 10 characters.');
            setIsDisabled(true);
        } else {
            setMsg(null);
            setIsDisabled(false);
        }

    }

    const handleSubmit = ev => {
        ev.preventDefault();

        // Make sure rating & text is required.
        if(text.length >= 10 && rating){
            const newItem = {
                id: uuidv4(),
                rating,
                text
            }
            onAddFeedbackItem(newItem);

            // Reset the input values.
            setText('');
            setIsDisabled(true);
            setRating(10);
        }

    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect onSetRating={setRating} rating={rating} />
                <div className='input-group'>
                    <input type='text' placeholder='Write a review' onChange={handleChange}
                        value={text} />
                    <Button type='submit' version='secondary' isDisabled={isDisabled}>Send</Button>
                </div>
                {msg && msg}
            </form>
        </Card>
    )
}

export default FeedbackForm
