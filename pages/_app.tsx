// Libraries
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate as ReduxPersistProvider } from 'redux-persist/integration/react'
import type { AppProps } from 'next/app'
import {
  Box,
  ChakraProvider,
  CSSReset,
  theme,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'

// Components
import Sidebar from './Sidebar'
import Footer from '../shared/components/Footer'

// Store
import configureStore from '../app/store'

// Stlyes
import '../styles/globals.css'

const { store, persistor } = configureStore()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ReduxPersistProvider loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Sidebar>
            <Container
              maxW={'6xl'}
              py={4}
              bg={useColorModeValue('white', 'gray.900')}
              color={useColorModeValue('gray.700', 'gray.200')}
            >
              <Component {...pageProps} />
            </Container>

            <Footer />
          </Sidebar>
        </ChakraProvider>
      </ReduxPersistProvider>
    </ReduxProvider>
  )
}

export default MyApp
