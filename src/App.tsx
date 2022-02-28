import React from "react";

import UserContainer from "./containers/UserContainer";
import LocalesProvider from "./providers/LocalesProvider";
import ThemeProvider from "./providers/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LocalesProvider>
        <UserContainer />
      </LocalesProvider>
    </ThemeProvider>
  );
};

export default App;
