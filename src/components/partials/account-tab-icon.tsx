import { useAuth } from '@/lib/context/AuthContext'
import { IonIcon } from '@ionic/react'
import { personOutline } from 'ionicons/icons'

const AccountTabIcon = () => {
    const { authState } = useAuth()
    return (
        <>
            {authState?.user ?(<div>
                {authState.user?.profilePic ?
                    (<img 
                        src={authState.user?.profilePic} 
                        className='rounded-full border-[2px] border-[#94A3B8] object-cover h-[30.4px] w-[30.4px]' 
                        alt="Profile picture" 
                    />)
                    : 
                    (<div style={{fontFamily: 'League Spartan, sans-serif', backgroundColor: authState?.user?.color }} className={`border-[2px] border-[#94A3B8] w-[28px] h-[28px] rounded-full text-[16px] text-white pt-[2.5px]`}>
                        {authState.user?.firstName[0].toUpperCase()}
                    </div>)
                }
            </div>)
            : <IonIcon aria-hidden="true" icon={personOutline} />}
        </>
    )
}

export default AccountTabIcon