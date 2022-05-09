import React from 'react';
// import { RoomEditor } from '@pages';
import RestaurantSetup from './components/organisms/RestaurantSetup';
import RestaurantInformation from './components/organisms/RestaurantInformation';
import RestaurantConfiguration from './components/organisms/RestaurantConfiguration';
import GuestSatisfaction from './components/organisms/GuestSatisfaction';
import MpsSettings from './components/organisms/MpsSettings';
function App() {
  return (
    <>
      <RestaurantSetup />
      <RestaurantInformation />
      <RestaurantConfiguration />
      <GuestSatisfaction />
      <MpsSettings />
    </>
  );
}

export default App;
