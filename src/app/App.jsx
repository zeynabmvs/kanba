import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {createContext, useMemo, useState} from "react";
import Dashboard from "../components/Dashboard";
import BasicModal from "../components/BasicModal"

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
				// shape: {
				// 			borderRadius: '50%', // Set to 50% for a full circle
				// },
				typography: {
					fontFamily: '"Helvetica Neue", Roboto, sans-serif',
					h1: {
						fontSize: "4rem",
						fontWeight: 700,
					},
				},
				palette: {
					mode,
					primary: {
						main: '#3f51b5',
					},
					secondary: {
						main: '#e91e63',
					},
				},
				shape: {
					borderRadius: 8,
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
