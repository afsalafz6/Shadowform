import React from 'react';
import { RoomEditor } from '@pages';

import Accordion from './components/molecules/Accordion';
import RestaurantSetup from './components/organisms/RestaurantSetup';
import { PropaneSharp } from '@mui/icons-material';
function App() {
  return (
    <>
      {/* <RoomEditor /> */}
      {/* <Restaurant /> */}
      <RestaurantSetup />
      {/* <Accordion headerText={"Restaurant"} /> */}
    </>
  );
}

export default App;
