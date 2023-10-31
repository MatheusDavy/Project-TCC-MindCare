import { createContext, useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { useRepository } from '../../repository'
import { permissions } from '../../configs/permissions'
import { AuthValuesType } from './interfaces'
import { User } from '../../types/users/usert.types'

const defaultProvider: AuthValuesType = {
    user: null,
    loading: true,
    setUser: () => null,
    setLoading: () => Boolean,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
    children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(defaultProvider.user)
    const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

    const { userRepository } = useRepository()

    const router = useRouter()

    const initAuth = async (): Promise<void> => {
        const storedToken = window.localStorage.getItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY!)
        if (storedToken) {
            setLoading(true)

            await userRepository.getMe()
                .then(async (response) => {
                    const user = response.data
                    setLoading(false)
                    setUser({ ...user })
                    if (!router.pathname.includes('meus-dados')) {
                        const path = router.pathname.match(/^\/([^/]+)/)
                        const permission = path?.[1] as keyof typeof permissions
                        if (permissions[permission] !== user.role) router.replace('/')
                    }
                })
                .catch(() => {
                    localStorage.removeItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY!)
                    setUser(null)
                    setLoading(false)
                    router.replace('/login')
                })
        } else {
            setLoading(false)
        }
    }

    const handleLogin = async (): Promise<void> => {

    }

    const handleLogout = () => {
        setUser(null)
        window.localStorage.removeItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY!)
        router.push('/login')
    }

    useEffect(() => {
        initAuth()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const values = {
        user,
        loading,
        setUser,
        setLoading,
        login: handleLogin,
        logout: handleLogout
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
