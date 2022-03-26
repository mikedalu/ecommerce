import { ThemeProvider, CssBaseline, AppBar, Link, Typography, Toolbar, Container, Box, createTheme } from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";

export default function Layout({ title, description, children }) {
	const theme = createTheme({
		typography: {
			h1: {
				fontSize: "1.6rem",
				fontWeight: 400,
				margin: "1rem 0",
			},
			h2: {
				fontSize: "1.4rem",
				fontWeight: 400,
				margin: "1rem 0",
			},
		},
		palette: {
			mode: "light",
			primary: {
				main: "#f0c000",
			},
			secondary: {
				main: "#208080",
			},
		},
	});

	return (
		<>
			<Head>
				<title>{title ? `${title} - Sanity Amazona` : "Sanity Amazoona"}</title>
				{description && <meta name="description" content={description}></meta>}
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppBar position="static">
					<Toolbar>
						<NextLink href="/" passHref>
							<Link>
								<Typography>amazona</Typography>
							</Link>
						</NextLink>
					</Toolbar>
				</AppBar>
				<Container component="main">{children}</Container>
				<Box component="footer">
					<Typography>All rights reserved. Sanity Amazona.</Typography>
				</Box>
			</ThemeProvider>
		</>
	);
}
