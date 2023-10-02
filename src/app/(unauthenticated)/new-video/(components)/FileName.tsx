import Image from 'next/image'

interface FileNameProps {
  fileName: string
}

const FileName = function ({ fileName }: FileNameProps) {
  return (
    <div className="font-sora file-name">
      <p className="text-base font-medium text-[#727272] mb-1">Name</p>
      <p className="text-lg font-semibold text-[#413C6D] flex gap-4 mb-6">
        Untitled_Video_20232509
        <Image className="w-[1.125rem]" src="/edit.svg" alt="edit" />
      </p>
    </div>
  )
}

export default FileName
