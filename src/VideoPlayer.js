import React from 'react'

const VideoPlayer = ({link}) => {
  return (
     <iframe
          src={link}
          frameborder="0"
          allow="fullscreen;autoplay"
          title="video"
          width="800px"
          height="500px"
        />
        
  )
}

export default VideoPlayer;