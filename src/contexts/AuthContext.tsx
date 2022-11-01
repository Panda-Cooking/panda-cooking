import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { iUserLogin } from '../components/Pages/SignIn'

export interface iUserProviderProps {
  children: ReactNode
}

interface iUserContext {
  loginFunction(formLogin: iUserLogin): void
}

export const userContext = createContext<iUserContext>({} as iUserContext)

const AuthContext = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  const loginFunction = async (formLogin: iUserLogin) => {
    try {
      const { data } = await api.post('/login', formLogin)
      localStorage.setItem('@pandaToken', data.accessToken)
      setUser(data.user)
      navigate('/dashboard', { replace: true })
      toast.success('Bem vindo ^^')
    } catch (error) {
      toast.error('email ou senha inválido')
    }
  }

  return (
    <userContext.Provider
      value={{
        loginFunction,
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export function useUserContext(): iUserContext {
  const context = useContext(userContext)

  return context
}

export default AuthContext
