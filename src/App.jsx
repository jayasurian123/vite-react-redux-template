import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ReactRouterGlobalNavigation } from './helpers/ReactRouterGlobalNavigation';
// import { getSession } from './helpers/localStorageHelper';

const WelcomeScreen = lazy(() => import('./screens/WelcomeScreen'));

const ProtectedLayout = () => {
  // if (!getSession()) {
  //   return redirectToAuthLoginPage();
  // }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />} />
      </Routes>
    </>
  );
};

// const PublicLayout = () => {
//   return (
//     <>
//       <Switch />
//     </>
//   );
// };

const App = () => {
  return (
    <HashRouter>
      <div>
        <ReactRouterGlobalNavigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="*" element={<ProtectedLayout />} />
          </Routes>
        </Suspense>
      </div>
    </HashRouter>
  );
};

export default App;
