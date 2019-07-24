import React, { Fragment } from "react";
import Routes from "./routes";
import GlobalStyle from './style/global'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
}

export default App;
