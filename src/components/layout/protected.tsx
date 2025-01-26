import { useAuth } from '../../lib/context/AuthContext'
import { Redirect } from 'react-router-dom'

const ProtectedRoute = ({ children, canSellOrAdmin }: { children: React.ReactNode, canSellOrAdmin?:boolean }) => {
    const { authState } = useAuth()
    let condition : boolean | null = null
    condition = authState?.isAuthenticated
    if(canSellOrAdmin) condition = (authState?.isAuthenticated && ["admin","seller","both"].includes(authState.user.role))
    // navigation.push('/auth/login', 'forward')
    return (
        <>
            {!condition ? (canSellOrAdmin ? <Redirect to='/tabs/home'/> : <Redirect to='/auth/login'/>) : children }
        </>
    )
}

export default ProtectedRoute