import Button from '@/components/ui/Button'
import Image from 'next/image'

const About = function () {
  return (
    <div className="about-page">
      <section>
        <h1 className="capitalize font-sora font-semibold text-2xl text-[#141414]">
          show them, don't just tell them
        </h1>
        <div className="images">
          <Image width={30} height={30} src="/pic1.png" alt="old woman" />
          <Image width={30} height={30} src="/pic2.png" alt="Father and son" />
          <Image
            width={30}
            height={30}
            src="/pic3.png"
            alt="Young lady pressing her phone"
          />
        </div>
        <p className="text-[#000000BF] text-lg mb-4 font-normal font-inter">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Button>
          <span className="capitalize">Install HelpMeOut</span>
          <Image
            width={30}
            height={30}
            src="/arrow-right.svg"
            alt="arrow-right"
          />
        </Button>
      </section>
      <section>
        <h2 className="text-[#141414] text-xl font-semibold capitalize">
          features
        </h2>
        <p>Key Highlights of Our Extension</p>
        <Image width={30} height={30} src="/video-repo.png" alt="video repo" />
        <div className="features">
          <div className="feature">
            <Image width={30} height={30} src="/record.svg" alt="record" />
            <h3>Simple Screen Recording</h3>
            <p>
              Effortless screen recording for everyone. Record with ease, no
              tech expertise required.
            </p>
          </div>
          <div className="feature">
            <Image width={30} height={30} src="/send-2.svg" alt="send" />
            <h3>Easy-to-Share URL</h3>
            <p>
              Share your recordings instantly with a single link. No
              attachments, no downloads.
            </p>
          </div>
          <div className="feature">
            <Image width={30} height={30} src="/revisit.svg" alt="revisit" />
            <h3>Revisit Recordings</h3>
            <p>
              Access and review your past content effortlessly. Your recordings,
              always at your fingertips.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
