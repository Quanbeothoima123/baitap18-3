import "react-native-gesture-handler";
import React from "react";
import RootRouter from "./routers";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <RootRouter />
    </SafeAreaProvider>
  );
};

export default App;
