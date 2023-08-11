import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [msg, setMsg] = useState(null);
    
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
        if(text.length >= 10){
            console.log('Submitted');
        }
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
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
