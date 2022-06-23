import React from 'react'
import MessageSender from '../message/MessageSender'
import StoryReel from '../story-reel/StoryReel'
import './Feed.css'

const Feed = () => {
  return (
    <div className="feed">
        <StoryReel />
        <MessageSender />
    </div>
  )
}

export default Feed