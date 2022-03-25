import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage;
	const cache = createCache({ key: "css" });
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () => {
		originalRenderPage({
			enhanceA: (App) => (props) => <App emotionCache={cache} {...props} />,
		});
	};
	const initialProps = await Document.getInitialProps(ctx);
	const emotionStyles = extractCriticalToChunks(initialProps.html);

	const emotionStylesTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`$style.key ${style.ids.join("")}`}
			key={style.key}
			// eslin-disable-nex-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		styles: [...React.Children.toArray(initialProps.styles), ...emotionStylesTags],
	};
};

// The Code above changes how NEXT render the document
