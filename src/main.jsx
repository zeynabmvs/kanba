import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import App from "./app/App.jsx";
import {persistor, store} from "./app/store.js";
import "./index.css";

// TODD: remove for deploy
persistor.purge();


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App/>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
