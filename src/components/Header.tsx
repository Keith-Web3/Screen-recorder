import Image from 'next/image'

interface HeaderProps {
  addExtras: boolean
}

const Header = function ({ addExtras }: HeaderProps) {
  return (
    <header className="header font-sora flex items-center mb-4 justify-between">
      <Image width={100} height={100} src="/logo-2.png" alt="logo" />
      {addExtras && (
        <div className="flex items-center gap-8">
          <p className="capitalize font-medium">features</p>
          <p className="capitalize font-medium">how it works</p>
        </div>
      )}
      <p className="capitalize cursor-pointer font-semibold text-[#120B48]">
        get started
      </p>
    </header>
  )
}

export default Header
