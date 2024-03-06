import Messenger from './components/Messenger'
import AccountProvider from './context/AccountProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  return (
    <GoogleOAuthProvider clientId='427839100725-vuqimbkk71muk0hodoqqs7j4e0laqui9.apps.googleusercontent.com'>
      <AccountProvider>
      <Messenger></Messenger>
      </AccountProvider>
    </GoogleOAuthProvider> 
  )
}

export default App
