import React from 'react'
import MessageSender from '../message/MessageSender'
import Post from '../post/Post'
import StoryReel from '../story-reel/StoryReel'
import './Feed.css'
import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'
import wallpaper1 from '../assets/wallpaper-1.jpg'
import wallpaper2 from '../assets/wallpaper-2.jpg'
import wallpaper3 from '../assets/wallpaper-3.jpg'

const Feed = () => {
  return (
    <div className="feed">
        <StoryReel />
        <MessageSender />

        <Post 
            profilePic={profile1}
            message='Testing'
            timestamp='Timestamp'
            username='Henry Jones'
            image={wallpaper1}
        />
        <Post 
            profilePic={profile2}
            message='Testing'
            timestamp='Timestamp'
            username='Edgar Green'
            image={wallpaper2}
        />
        <Post 
            profilePic={profile3}
            message='Testing'
            timestamp='Timestamp'
            username='Marie Smith'
            image={wallpaper3}
        />
    </div>
  )
}

export default Feed