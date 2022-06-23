import { Avatar } from '@mui/material'
import React from 'react'
import './Story.css'

const Story = ({ image, profileSrc, title}) => {
    return (
        <div className="story">
            <Avatar className="story__avatar" src={profileSrc} />
        </div>
    )

}

export default Story