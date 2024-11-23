import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Lottie from 'lottie-react';
import animationData from '@/lib/lotties/ManShowingSmartphone.json'
import animationData2 from '@/lib/lotties/Girl_handle_empty_box.json'

const Chat: React.FC = () => {
  return (
    <IonPage>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chat page</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <Lottie animationData={animationData2}/>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
