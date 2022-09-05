import {AppProps} from 'next/app'
import { QueryClientProvider ,QueryClient} from 'react-query'

import {ChakraProvider} from '@chakra-ui/react'
import {theme} from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
    if(process.env.NODE_ENV === 'development' ) {
        makeServer()
    }


    return (
        <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
            <SidebarDrawerProvider>
            <Component {...pageProps} />
            </SidebarDrawerProvider>

        </ChakraProvider>

        <ReactQueryDevtools/>
        </QueryClientProvider>
    ) 
  }


  export default MyApp