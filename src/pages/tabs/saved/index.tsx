
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Saved </IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>Saved Pages</div>
        <IonInput inputMode='tel' placeholder='Your name' style={{ width:"90%"}}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
