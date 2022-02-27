import React from "react";

import UserContainer from "./containers/UserContainer";
import LocalesProvider from "./providers/LocalesProvider";

const App = () => {
  return (
    <LocalesProvider>
      <UserContainer />
    </LocalesProvider>
  );
};

export default App;
