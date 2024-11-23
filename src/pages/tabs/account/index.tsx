import { useAuth } from '@/lib/context/AuthContext'
import { IonContent, IonPage, IonHeader, IonList, IonListHeader, IonLabel, IonItem, IonIcon, IonAvatar, useIonRouter } from '@ionic/react'
import { helpBuoyOutline, helpCircleOutline, paperPlaneOutline, personOutline, settingsOutline } from 'ionicons/icons'
import type { SVGProps } from 'react';
import './Account.css';

export function SolarUserIdBroken(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx={9} cy={9} r={2}></circle><path d="M13 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z"></path><path strokeLinecap="round" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.47.47.751 1.054.92 1.828M19 12h-4m4-3h-5m5 6h-3"></path></g></svg>);
}

export function MdiViewDashboardOutline(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 5v2h-4V5zM9 5v6H5V5zm10 8v6h-4v-6zM9 17v2H5v-2zM21 3h-8v6h8zM11 3H3v10h8zm10 8h-8v10h8zm-10 4H3v6h8z"></path></svg>);
}

export function MaterialSymbolsPolicyOutline(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 2.125-.725 4.088T17.2 18.65l-3.2-3.2q-.45.275-.962.413T12 16q-1.65 0-2.825-1.175T8 12t1.175-2.825T12 8t2.825 1.175T16 12q0 .55-.137 1.063t-.413.987l1.5 1.5q.5-1.025.775-2.15T18 11.1V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3q.65-.2 1.238-.512t1.162-.738l1.4 1.4q-.825.675-1.787 1.175T12 22m0-8q.825 0 1.413-.587T14 12t-.587-1.412T12 10t-1.412.588T10 12t.588 1.413T12 14m.2-1.925"></path></svg>);
}
export function IxLegal(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" fillRule="evenodd" d="M355.646 276.647a70.3 70.3 0 0 0-2.765-15.559c-1.479-5-3.491-9.821-5.966-14.495c-2.474-4.675-5.411-9.2-8.74-13.608s-7.05-8.696-11.092-12.896c-4.041-4.199-8.404-8.309-13.017-12.358s-9.476-8.038-14.518-11.996s-10.264-7.885-15.594-11.81s-10.77-7.849-16.246-11.8l-2.514-1.816l-5.077-3.674a2414 2414 0 0 1-5.165-3.756a1571 1571 0 0 1-5.28-3.87q-1.338-.984-2.693-1.987a102 102 0 0 1-8.676-6.849a84 84 0 0 1-7.052-6.99a69 69 0 0 1-5.507-7.004a56 56 0 0 1-4.043-6.886a45 45 0 0 1-2.66-6.641a36 36 0 0 1-1.356-6.265a28.4 28.4 0 0 1-.133-5.76a22.5 22.5 0 0 1 1.01-5.126a22 22 0 0 1 2.094-4.575a23 23 0 0 1 3.1-4.024a27 27 0 0 1 4.067-3.455a34 34 0 0 1 5-2.865a45 45 0 0 1 5.894-2.257a59 59 0 0 1 6.752-1.63a77 77 0 0 1 7.572-.982a99 99 0 0 1 8.355-.316c4.997.164 9.377.835 13.216 1.884s7.136 2.476 9.968 4.153a34 34 0 0 1 7.18 5.651a34.2 34.2 0 0 1 4.847 6.377a37.5 37.5 0 0 1 2.973 6.33a40 40 0 0 1 1.557 5.514c.334 1.616.508 2.966.599 3.924s.097 1.52.097 1.563H344.5c0-3.644-.347-7.565-1.07-11.642a79.6 79.6 0 0 0-3.333-12.576a82.7 82.7 0 0 0-5.776-12.773a80 80 0 0 0-8.402-12.233a77 77 0 0 0-11.21-10.959a77.2 77.2 0 0 0-14.198-8.946c-5.252-2.566-11.032-4.673-17.37-6.199c-6.34-1.526-13.237-2.472-20.724-2.714a44 44 0 0 1-.82-.007l-.271-.004q-.136 0-.271-.003q-.135-.005-.27-.007h-.535c-5.177 0-10.186.288-15.008.852a110 110 0 0 0-13.887 2.512a94 94 0 0 0-12.65 4.105a81 81 0 0 0-11.299 5.63a72 72 0 0 0-9.834 7.09a66 66 0 0 0-8.256 8.48a64 64 0 0 0-6.562 9.808A66 66 0 0 0 178 92.272a65 65 0 0 0-2.127 8.394a66 66 0 0 0-.991 8.55a69 69 0 0 0 .112 8.648c.218 2.892.615 5.79 1.184 8.686a80 80 0 0 0 2.224 8.667a87 87 0 0 0 3.23 8.588a96 96 0 0 0 4.205 8.452a105 105 0 0 0 5.149 8.257a196 196 0 0 0-8.664 9.621a158 158 0 0 0-7.417 9.519a128 128 0 0 0-6.175 9.43a106 106 0 0 0-4.937 9.353a89 89 0 0 0-3.702 9.291a78 78 0 0 0-2.471 9.241a71 71 0 0 0-1.245 9.205a69 69 0 0 0-.02 9.181a70.3 70.3 0 0 0 2.764 15.559c1.479 4.999 3.491 9.82 5.966 14.495s5.411 9.2 8.74 13.608c3.33 4.407 7.05 8.696 11.092 12.895c4.041 4.2 8.404 8.31 13.017 12.359s9.475 8.038 14.518 11.996c5.042 3.958 10.264 7.885 15.594 11.81s10.77 7.848 16.246 11.799l2.514 1.817l5.077 3.674a2416 2416 0 0 1 5.165 3.755a1570 1570 0 0 1 5.28 3.87q1.338.984 2.693 1.988a102 102 0 0 1 8.676 6.849a84 84 0 0 1 7.052 6.99a69 69 0 0 1 5.507 7.004a56 56 0 0 1 4.043 6.886a45 45 0 0 1 2.66 6.64a36 36 0 0 1 1.356 6.266c.243 2.011.283 3.938.133 5.76a22.5 22.5 0 0 1-1.01 5.126a22 22 0 0 1-2.098 4.582a23.2 23.2 0 0 1-3.11 4.04a27 27 0 0 1-4.08 3.476a34 34 0 0 1-5.012 2.884a44.5 44.5 0 0 1-5.9 2.267a58 58 0 0 1-6.75 1.627a75 75 0 0 1-7.559.96q-3.976.31-8.325.268c-4.995-.164-9.372-.835-13.209-1.884c-3.837-1.05-7.132-2.477-9.963-4.153a34 34 0 0 1-7.176-5.651a34.2 34.2 0 0 1-4.845-6.377a37.5 37.5 0 0 1-2.971-6.331a40 40 0 0 1-1.557-5.513a37 37 0 0 1-.598-3.924a20 20 0 0 1-.098-1.563h-42.666c0 3.643.346 7.565 1.07 11.642a79.6 79.6 0 0 0 3.332 12.576a82.7 82.7 0 0 0 5.776 12.772a80 80 0 0 0 8.4 12.234a77 77 0 0 0 11.207 10.958a77.2 77.2 0 0 0 14.195 8.947c5.25 2.565 11.029 4.672 17.366 6.199c6.336 1.526 13.232 2.472 20.716 2.714a44 44 0 0 1 .82.006l.271.004l.271.004c.09.001.18.007.27.007h.535c5.177 0 10.186-.288 15.008-.852a110 110 0 0 0 13.887-2.512a94 94 0 0 0 12.65-4.105a81 81 0 0 0 11.299-5.63a72 72 0 0 0 9.834-7.09a66 66 0 0 0 8.256-8.481a64 64 0 0 0 6.562-9.807A66 66 0 0 0 334 419.73a65 65 0 0 0 2.127-8.394a66 66 0 0 0 .991-8.55c.145-2.87.105-5.756-.112-8.648a74 74 0 0 0-1.184-8.686a80 80 0 0 0-2.224-8.667a87 87 0 0 0-3.23-8.589a96 96 0 0 0-4.206-8.451a105 105 0 0 0-5.148-8.257a196 196 0 0 0 8.664-9.621q4.02-4.784 7.417-9.52q3.399-4.736 6.175-9.429a106 106 0 0 0 4.937-9.354a89 89 0 0 0 3.702-9.29a78 78 0 0 0 2.471-9.242a71 71 0 0 0 1.244-9.204q.316-4.595.022-9.181m-86.396 28.625c-8.854-6.386-17.585-12.684-25.723-18.898s-15.685-12.343-22.17-18.391c-6.486-6.049-11.911-12.015-15.807-17.904s-6.264-11.698-6.633-17.432c-.183-2.9.168-5.954 1.034-9.156c.866-3.201 2.248-6.55 4.128-10.036c1.88-3.487 4.257-7.112 7.114-10.866c2.858-3.755 6.195-7.638 9.994-11.643q.103.074.197.152q.095.077.188.157l.188.157a4 4 0 0 0 .198.151q2.61 1.946 5.22 3.861q2.611 1.916 5.215 3.809q2.604 1.891 5.195 3.765l5.162 3.732c8.854 6.385 17.585 12.684 25.723 18.897c8.138 6.214 15.685 12.344 22.17 18.392s11.911 12.015 15.807 17.903c3.896 5.889 6.264 11.699 6.633 17.433c.183 2.9-.168 5.954-1.034 9.155c-.866 3.202-2.248 6.55-4.128 10.037s-4.257 7.112-7.114 10.866s-6.195 7.638-9.995 11.643a4 4 0 0 1-.197-.152l-.187-.157l-.188-.157a4 4 0 0 0-.198-.152a899 899 0 0 0-5.22-3.86q-2.611-1.917-5.215-3.809a2679 2679 0 0 0-5.195-3.765q-2.59-1.874-5.162-3.732"></path></svg>);
}

const Account = () => {
  const { authState } = useAuth()

  const styleSheet = {
    header: {
      boxShadow: 'none',
      padding: 15,
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      gap: 20,
      height: '18vh',
      background: ' #1f2937',
      fontFamily: 'League Spartan, sans-serif'
    },
    avatar: {
      width: 36.4,
      height: 36.4,
    }
  }

  const navigation = useIonRouter()
  const handleNavigate = (path: string) => {
    navigation.push(path, 'forward')
  }

  return (
    <IonPage>
      <IonHeader style={styleSheet.header} className='bg-gray-800'>
        <div className='relative w-[65px] h-[65px] rounded-full'>
          <div className='absolute bottom-2 left-[83%] w-[12px] h-[12px] bg-green-500 rounded-full'></div>
          {/* <img src={"/images/users/reginia.jpg"} className='w-full h-full rounded-full' alt="Profile picture" /> */}
          {authState?.user?.profilePic ?
            <img src={authState.user?.profilePic} className='w-full h-full rounded-full' alt="Profile picture" />
            : authState?.user?.firstName && (
              <IonAvatar style={styleSheet.avatar}>
                <div style={{ fontFamily: 'League Spartan, sans-serif', backgroundColor: authState?.user?.color }} className={`w-[65px] h-[65px] rounded-full text-[42px] text-center text-white pt-1`}>
                  {authState.user?.firstName[0].toUpperCase()}
                </div>
              </IonAvatar>
            )
          }
        </div>
        <div className='text-white'>
          <div className='mb-2 text-[22px]'>{authState?.user?.firstName} {authState?.user?.lastName}</div>
          <div className='text-[15px]'>{authState?.user?.email}</div>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonListHeader lines="inset">
            <IonLabel className='text-[22px] font-medium'>Mon espace</IonLabel>
          </IonListHeader>
          <IonItem className='hover:bg-slate-600'>
            <IonIcon icon={personOutline} className='mr-3' />
            <IonLabel>Mon profil</IonLabel>
          </IonItem>
          <IonItem>
            <MdiViewDashboardOutline className='text-[24px] text-[#5f5f5f] inline mr-3' />
            <IonLabel>Tableau de bord</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={paperPlaneOutline} className='mr-3' />
            <IonLabel>Inviter des amis</IonLabel>
          </IonItem>
        </IonList>
        <IonList>
          <IonListHeader lines="inset">
            <IonLabel className='text-[22px] font-medium'>Paramètres</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonIcon icon={settingsOutline} className='mr-3' />
            <IonLabel>Reglages de l'application</IonLabel>
          </IonItem>
          <IonItem routerLink='/tabs/account/profile-settings' /*onClick={() => handleNavigate('')}*/ >
            {/* <IonIcon icon={personOutline} className='mr-3'/> */}
            <SolarUserIdBroken className='text-[24px] text-[#5f5f5f] inline mr-3' />
            <IonLabel>Compte</IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader lines="inset">
            <IonLabel className='text-[22px] font-medium'>Support / Assistance</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonIcon icon={helpBuoyOutline} className='mr-3' />
            <IonLabel>Aide</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={helpCircleOutline} className='mr-3' />
            <IonLabel>FAQ</IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader lines="inset">
            <IonLabel className='text-[22px] font-medium'>Informations légales</IonLabel>
          </IonListHeader>
          <IonItem>
            <MaterialSymbolsPolicyOutline className='text-[24px] text-[#5f5f5f] inline mr-3' />
            <IonLabel>Politique de confidentialité</IonLabel>
          </IonItem>
          <IonItem>
            <IxLegal className='text-[24px] text-[#5f5f5f] inline mr-3' />
            <IonLabel>Termes et conditions d'utilisations</IonLabel>
          </IonItem>
        </IonList>


      </IonContent>
    </IonPage>
  )
}

export default Account