import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";
import {ContextProvider} from "../context"

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider >
 <Component {...pageProps} />
    </ContextProvider>
  )
   
}

export default MyApp
