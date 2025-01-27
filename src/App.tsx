import { Route, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
import '@ionic/react/css/palettes/dark.class.css';
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import './index.css';
import { AuthProvider } from './lib/context/AuthContext';
import { lazy, Suspense } from 'react';
// import Tabs from './pages/tabs';
const Tabs = lazy(() => import('./pages/tabs'));
import Login from './pages/auth/login';
import Register from './pages/auth/register';

setupIonicReact();

export const LoadingTabs: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <IonSpinner className='mr-3 w-[34px] h-[34px] '></IonSpinner>
      <span style={{ fontSize: 18, fontFamily: 'League Spartan, sans-serif' }}>Veuillez patienter...</span>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <AuthProvider>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
            <Route path="/tabs">
              <Suspense fallback={<LoadingTabs/>}>
                <Tabs />
              </Suspense>
            </Route>
            <Route exact path="/">
              <Redirect to="/tabs" />
            </Route>
          </AuthProvider>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;

// NOMS POTENTIELS

// Nesthub
// Nesthome
// Nestora
// Nestriv
// Domifly

// NESTFINN
