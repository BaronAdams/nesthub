import { IonAvatar, IonContent, IonHeader, IonPage, IonSpinner, IonText } from '@ionic/react'
import Categories from '@/components/partials/categories';
import Properties from '@/components/partials/properties';
import { useAuth } from '@/lib/context/AuthContext';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Home: React.FC = () => {
  const { loading, authState, error } = useAuth()
  const styleSheet = {
    header: {
      boxShadow: 'none',
      padding: 15,
      display: 'flex',
      justifyContent: 'space-between'
    },
    avatar: {
      width: 28,
      height: 28,
    }
  }

  return (
    <IonPage style={{ overflow: 'hidden' }}>
      {loading && (
      <div style={{ width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <IonSpinner className='mr-3 w-[34px] h-[34px] '></IonSpinner> 
        <span style={{ fontSize: 18, fontFamily: 'League Spartan, sans-serif' }}>Veuillez patienter...</span>
      </div>)}
      {error && (
        <IonText>Une erreur est survenue</IonText>
      )}
      {!loading && !error && (
        <>
          <IonHeader style={styleSheet.header}>
            <span>Logo</span>
            <DropdownMenu>
              <DropdownMenuTrigger className='visited:border-0'>
                {authState?.user?.profilePic ?
                        <img src={authState.user?.profilePic} className='w-[36.4px] h-[36.4px] rounded-full' alt="Profile picture" />
                        : authState?.user?.firstName && (
                          <IonAvatar style={styleSheet.avatar}>
                            <div style={{fontFamily: 'League Spartan, sans-serif', backgroundColor: authState?.user?.color }} className={`w-full h-full rounded-full text-[16px] text-white pt-1`}>
                              {authState.user?.firstName[0].toUpperCase()}
                            </div>
                          </IonAvatar>
                      )
                }
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </IonHeader>
          <IonContent fullscreen>
            <Categories />
            <Properties />
          </IonContent>
        </>
      )}
      
    </IonPage>
  );
};

export default Home;
