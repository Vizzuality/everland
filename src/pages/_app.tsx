import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as ReduxProvider } from 'react-redux'
import { globalStyles } from 'stitches.config'

import type { AppProps } from 'next/app'

import { OverlayProvider } from '@react-aria/overlays'
import { Hydrate } from 'react-query/hydration'

import store from 'store'

const queryClient = new QueryClient()
globalStyles()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <OverlayProvider>
          <Component {...pageProps} />
        </OverlayProvider>
      </Hydrate>
    </QueryClientProvider>
  </ReduxProvider>
)

export default MyApp
