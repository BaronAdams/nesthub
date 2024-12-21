import { Route, Redirect } from 'react-router-dom';
import {
    IonIcon,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { homeOutline, mailOutline, bookmarkOutline, notificationsOutline } from 'ionicons/icons';
import { useAuth } from '@/lib/context/AuthContext';
import Home from './home';
import Chat from './chat';
import Saved from './saved';
import Notifications from './notifications';
import Account from './account';
import ProfileSettings from './account/profile-settings';
import ProtectedRoute from '@/components/layout/protected';
import AccountTabIcon from '@/components/partials/account-tab-icon';
import Profile from './account/profile';

const Tabs: React.FC = () => {
    const { loading, error } = useAuth()

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/tabs/home" component={Home} />
                <Route exact path="/tabs/chat">
                    <ProtectedRoute>
                        <Chat />
                    </ProtectedRoute>
                </Route>
                <Route exact path="/tabs/saved">
                    <ProtectedRoute>
                        <Saved />
                    </ProtectedRoute>
                </Route>
                <Route exact path="/tabs/notifications">
                    <ProtectedRoute>
                        <Notifications />
                    </ProtectedRoute>
                </Route>
                <Route exact path="/tabs/account">
                    <ProtectedRoute>
                        <Account />
                    </ProtectedRoute>
                </Route>
                <Route exact path="/tabs/account/profile-settings">
                    <ProtectedRoute>
                        <ProfileSettings />
                    </ProtectedRoute>
                </Route>
                <Route exact path="/tabs/account/profile">
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                </Route>
                <Route exact path="/tabs">
                    <Redirect to="/tabs/home" />
                </Route>
            </IonRouterOutlet>

            {!loading && !error && (
                <IonTabBar slot="bottom" >
                    <IonTabButton className='mt-[6.5px]' tab="home" href="/tabs/home">
                        <IonIcon aria-hidden="true" icon={homeOutline} />
                        {/* <IonLabel style={{ fontFamily: "League Spartan, sans-serif", fontSize: 13.4 }}>Accueil</IonLabel> */}
                    </IonTabButton>
                    <IonTabButton className='mt-[6.5px]' tab="chat" href="/tabs/chat">
                        <IonIcon aria-hidden="true" icon={mailOutline} />
                        {/* <IonLabel style={{ fontFamily: "League Spartan, sans-serif", fontSize: 13.4 }}>Messages</IonLabel> */}
                    </IonTabButton>
                    <IonTabButton className='mt-[6.5px]' tab="saved" href="/tabs/saved">
                        <IonIcon aria-hidden="true" icon={bookmarkOutline} />
                        {/* <IonLabel style={{ fontFamily: "League Spartan, sans-serif", fontSize: 13.4 }}>Enregistré<s></s></IonLabel> */}
                    </IonTabButton>
                    <IonTabButton className='mt-[6.5px]' tab="notifications" href="/tabs/notifications">
                        <IonIcon aria-hidden="true" icon={notificationsOutline} />
                        {/* <IonLabel style={{ fontFamily: "League Spartan, sans-serif", fontSize: 13.4 }}>Notif.</IonLabel> */}
                    </IonTabButton>
                    <IonTabButton className='mt-[6.5px]' tab="account" href="/tabs/account">
                        <AccountTabIcon />
                        {/* <IonLabel style={{ fontFamily: "League Spartan, sans-serif", fontSize: 13.4 }}>Compte</IonLabel> */}
                    </IonTabButton>
                    {/* <IonTabButton className='mt-[6.5px]' tab="tab3" href="/tabs/tab3">
                    <IonIcon aria-hidden="true" icon={settingsOutline} />
                    <IonLabel style={{ fontFamily: "League Spartan, sans-serif", fontSize: 13.4 }}>Paramètres</IonLabel>
                </IonTabButton> */}
                </IonTabBar>
            )}

        </IonTabs>
    )
}

export default Tabs
