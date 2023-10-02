import Button from '@/components/ui/Button'
import FileName from '../(components)/FileName'
import ShareVideo from '../(components)/ShareVideoBtn'
import VideoPlayer from '../(components)/VideoPlayer'

interface NewVideoProps {
  videoTitle: string
  videoUrl: string
  params: { 'video-id': string }
}

const NewVideo = function ({ videoTitle, videoUrl, params }: NewVideoProps) {
  console.log(params['video-id'])
  return (
    <div className="new-video-page">
      <h1 className="font-sora text-4xl font-semibold text-[#141414] video-ready">
        Your video is ready!
      </h1>
      <FileName fileName={videoTitle} />
      <div className="divider"></div>
      <label
        htmlFor="email"
        className="email-label bg-[#b6b3c633] rounded-xl items-center px-2 py-1 border-[0.5px] border-[#E7E7ED]"
      >
        <input
          type="email"
          placeholder="enter email of receiver"
          name="email"
          id="email"
          className="border-none outline-0 font-wsans shrink-1 font-normal text-lg placeholder:text-[#434343cc] bg-transparent px-4 py-3"
        />
        <button className=" border-none outline-0 text-white capitalize bg-[#605C84] cursor-pointer px-4 py-2 rounded-md">
          send
        </button>
      </label>
      <section className="video-link">
        <h2 className="text-xl font-semibold text-[#141414] mb-4 capitalize">
          video url
        </h2>
        <div>
          <p
            title=" https://www.helpmeout/Untitled_Video_20232509"
            className=" overflow-hidden whitespace-nowrap overflow-ellipsis"
          >
            https://www.helpmeout/Untitled_Video_20232509
          </p>
          <button>
            <img src="/copy.svg" alt="copy-link" />
            <span>
              Copy <span>video link</span>
            </span>
          </button>
        </div>
      </section>
      <section className="share-video-btns">
        <h2 className="text-xl font-semibold text-[#141414] mb-4">
          Share your video
        </h2>
        <ShareVideo logo="/facebook.svg" name="Facebook" />
        <ShareVideo logo="/whatsapp.svg" name="WhatsApp" />
        <ShareVideo logo="/telegram.svg" name="Telegram" />
      </section>
      <VideoPlayer link="/video.mkv" />
    </div>
  )
}

export default NewVideo
