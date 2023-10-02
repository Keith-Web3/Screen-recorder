interface ShareVideoProps {
  logo: string
  name: string
}

const ShareVideo = function ({ logo, name }: ShareVideoProps) {
  return (
    <button>
      <img src={logo} alt={name + '-logo'} />
      <span>{name}</span>
    </button>
  )
}

export default ShareVideo
