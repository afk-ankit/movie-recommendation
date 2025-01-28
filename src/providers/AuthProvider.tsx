import { useUserStore } from "@/store/useUserStore"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { username,genres } = useUserStore()

  useEffect(() => {
    const currentPath = location.pathname
    const publicPaths = ['/genre', '/profile']
    if (publicPaths.includes(currentPath)) {
      return
    }
    if (!username) {
      navigate('/profile')
      return
    }
    if (genres.length === 0) {
      navigate('/genre')
    }
  }, [genres.length, username, navigate, location.pathname])

  if (
    (genres.length === 0 && location.pathname !== '/genre') ||
    (!username && location.pathname !== '/profile')
  ) {
    return null
  }

  return <>{children}</>
}

export default AuthProvider
