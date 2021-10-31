import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";

import rootReducers from "./store";
import App from "./App";
import { Provider } from "react-redux";

const store = createStore(rootReducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
