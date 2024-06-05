import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {createContext, useMemo, useState} from "react";
import Dashboard from "../components/Dashboard";
import BasicModal from "../components/BasicModal"
import {purple} from '@mui/material/colors';

export const ColorModeContext = createContext({
	toggleColorMode: () => {
	}
});

function App() {
	const [mode, setMode] = useState("light");
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);
	
	const theme = useMemo(
		() =>
			createTheme({
				typography: {
					h1: {
						fontSize: "4rem",
						fontWeight: 700,
					},
				},
				palette: {
					primary: {
						main: "#2a9461"
					},
					secondary: {main: purple[700]},
					mode,
				},
			}),
		[mode]
	);
	
	return (
		<>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline enableColorScheme>
						<Dashboard/>
						<BasicModal/>
					</CssBaseline>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</>
	);
}

export default App;
