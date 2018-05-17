import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { TodoListApp } from "./containers";
import registerServiceWorker from './utils/registerServiceWorker';

render(
  <Provider store={store}>
    <TodoListApp />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
