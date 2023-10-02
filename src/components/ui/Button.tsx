import { ComponentPropsWithoutRef, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

const Button = function ({
  children,
  ...props
}: ButtonProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className="bg-[#120B48] text-white flex items-center gap-4 rounded-md px-5 py-3 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
