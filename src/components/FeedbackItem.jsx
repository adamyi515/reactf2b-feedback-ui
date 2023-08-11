import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card'

const FeedbackItem = ({ item, onDeleteFeedbackItem }) => {

    return (
        <Card >
            <div className='num-display'>{ item.rating }</div>
            <button className='close' onClick={() => onDeleteFeedbackItem(item.id)}>
                <FaTimes color='purple' />
            </button>
            <div className='text-display'>
                { item.text }
            </div>
        </Card>
    )
}

export default FeedbackItem
