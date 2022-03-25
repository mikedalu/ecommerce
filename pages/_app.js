import createCache from "@emotion/cache";
import { CacheProvider, cacheProvider } from "@emotion/react";

const clientSideEmotionCache = createCache({ key: "css" });
function MyApp({ Component, pageProps, emotionCahce = clientSideEmotionCache }) {
	return (
		<CacheProvider value={emotionCahce}>
			<Component {...pageProps} />
		</CacheProvider>
	);
}

export default MyApp;
