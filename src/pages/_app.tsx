import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";
import store from '../redux/store';
import { ReduxProvider, useReduxState, useReduxDispatch } from '../redux/redux-bindings';


// Default way to get a logged user
export const loggedUserId = getLoggedUserId()

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
      </ReduxProvider>
  )
   
}
export default MyApp;
