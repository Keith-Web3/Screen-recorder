import Image from 'next/image'

interface ShareVideoProps {
  logo: string
  name: string
}

const ShareVideo = function ({ logo, name }: ShareVideoProps) {
  return (
    <button>
      <Image src={logo} alt={name + '-logo'} />
      <span>{name}</span>
    </button>
  )
}

export default ShareVideo
