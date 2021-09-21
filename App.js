import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import store from './src/Store';
import RootStackScreen from "./src/Navigation/RootStackScreen";

export default class App extends Component {
  render() {
    return (
      <>
       {/* <Provider store={store}> */}
          <RootStackScreen />
       {/* </Provider> */}
      </>
    );
  }
}
