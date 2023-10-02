import Header from '@/components/Header'
import { ReactNode } from 'react'

interface UnAuthenticatedProps {
  children: ReactNode
}

const UnAuthenticated = function ({ children }: UnAuthenticatedProps) {
  return (
    <div>
      <Header addExtras />
      {children}
    </div>
  )
}

export default UnAuthenticated
