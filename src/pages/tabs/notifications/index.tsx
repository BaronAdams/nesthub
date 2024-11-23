import { IonContent, IonPage } from '@ionic/react'
import Lottie from 'lottie-react';
import animationData from '@/lib/lotties/Cat_over_bell.json'

const Notifications = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div>Notifications</div>
        <Lottie animationData={animationData}/>
      </IonContent>
    </IonPage>
  )
}

export default Notifications