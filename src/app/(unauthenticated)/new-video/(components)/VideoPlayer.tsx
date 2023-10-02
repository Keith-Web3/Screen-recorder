'use client'

import { useRef } from 'react'

interface VideoPlayerProps {
  link: string
}

const VideoPlayer = function ({ link }: VideoPlayerProps) {
  const videoPlayerRef = useRef<HTMLVideoElement>(null)
  return (
    <video className="w-full rounded-lg" controls src={link}></video>
    // <div>
    //   <video ref={videoPlayerRef} src={link} />
    //   <div></div>
    //   <time></time>
    //   <div>
    //     <Controls img="play.svg" name="play" />
    //     <Controls img="volume.svg" name="volume" />
    //     <Controls img="setting.svg" name="settings" />
    //   </div>
    // </div>
  )
}

export default VideoPlayer
