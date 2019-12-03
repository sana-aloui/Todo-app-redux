import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/Store";
import { Provider } from "react-redux";

ReactDOM.render(
	<Provider store={store}>		
		<App />
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();

//we use Provider component from react-redux library is responsive to connect everything from react and redux.
