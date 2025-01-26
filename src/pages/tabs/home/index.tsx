import { IonAvatar, IonContent, IonHeader, IonPage, IonSpinner, IonText } from '@ionic/react'
import Categories from '@/components/partials/categories';
import { useAuth } from '@/lib/context/AuthContext';
import DefaultProperties from '@/components/partials/properties/DefaultProperties';
import PropertySectionSkeleton from '@/components/partials/properties/PropertySectionSkeleton';
import { useEffect } from 'react';

const Home: React.FC = () => {
  // const { loading, authState, error } = useAuth()
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

  useEffect(()=>{
    console.log(authState)
  })

  return (
    <IonPage style={{ overflow: 'hidden' }}>
      {/* {loading && (
      <div style={{ width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <IonSpinner className='mr-3 w-[34px] h-[34px] '></IonSpinner> 
        <span style={{ fontSize: 18, fontFamily: 'League Spartan, sans-serif' }}>Veuillez patienter...</span>
      </div>)} */}
      {error && (
        <IonText>Une erreur est survenue</IonText>
      )}
      {!loading && !error && (
        <>
          <IonHeader style={styleSheet.header}>
            <span>Logo</span>
            <div>
                {authState.user?.profilePic ?
                        <img src={authState.user?.profilePic} className='w-[32px] h-[32px] rounded-full' alt="Profile picture" />
                        : authState.user?.firstName && (
                          // <IonAvatar style={styleSheet.avatar}>
                            <div style={{fontFamily: 'League Spartan, sans-serif', backgroundColor: authState?.user?.color }} className={`w-[32px] h-[32px] rounded-full text-center text-[18px] text-white pt-1`}>
                              {authState.user?.firstName[0].toUpperCase()}
                            </div>
                          // {/* </IonAvatar> */}
                      )
                }
            </div>
          </IonHeader>
          <IonContent fullscreen>
            <Categories />
            <DefaultProperties />
            <PropertySectionSkeleton title='Recommandées pour vous' propertySkeletons={[...Array(5)]} />
          </IonContent>
        </>
      )}
      
    </IonPage>
  );
};

export default Home;
