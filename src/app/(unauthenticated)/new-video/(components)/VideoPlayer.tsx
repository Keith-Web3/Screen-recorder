interface VideoPlayerProps {
  link: string
}

const VideoPlayer = function ({ link }: VideoPlayerProps) {
  return <video className="w-full rounded-lg" controls src={link}></video>
}

export default VideoPlayer
