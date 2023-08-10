import React, { useState } from 'react'
import Card from '../shared/Card'

const FeedbackForm = () => {
    const [text, setText] = useState('');
    
    // Event handlers //////////////////////////////////
    const handleChange = ev => {
        setText(ev.target.value);
    }

    const handleSubmit = ev => {
        console.log(ev.target.value)
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <div className='input-group'>
                    <input type='text' placeholder='Write a review' onChange={handleChange}
                        value={text} />
                    <button className='btn btn-primary' type='submit'>Send</button>
                </div>
            </form>
            
        </Card>
    )
}

export default FeedbackForm
