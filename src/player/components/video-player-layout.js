import React from 'react'

const VideoPlayerLayout = (props) => (
  <div
    className = "VideoPlayer"
    ref = { props.setRef }
  >
    { props.children }
  </div>
)

export default VideoPlayerLayout
