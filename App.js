import React from 'react';
// import Registerscr from './app/screen/registerscr';
import {NavigationContainer} from '@react-navigation/native';
import Stacknavigation from './app/navigation/stack navigation/stacknavigation';
// import Apps from './app/components/passwordval';

const App = () => {
  return (
    <NavigationContainer>
      <Stacknavigation />
    </NavigationContainer>

    // <Registerscr/>
    // <Apps/>
  );
};
export default App;
