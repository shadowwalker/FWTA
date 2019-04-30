import { Container } from 'unstated-typescript'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { User } from 'firebase'

const isBrowser = (process as any).browser || typeof window !== 'undefined'

interface State {
  isOffline: boolean
  isInitialized: boolean
  user?: User
}

export default class AppContainer extends Container<State> {
  state: State = {
    isOffline: !isBrowser ? false : !navigator.onLine,
    isInitialized: !isBrowser ? false : firebase.apps.length > 0
  }

  init = () => {
    if (isBrowser && !this.state.isInitialized) {
      firebase.initializeApp({
        projectId: process.env.FIREBASE_PROJECT_ID,
        apiKey: process.env.FIREBASE_WEB_API_KEY
      })
      
      firebase.auth().onAuthStateChanged(user => {
        if (user){
          this.setState({user})
        } else {
          this.setState({user: undefined})
        }
      })

      window.addEventListener('online', e => {
        this.setState({isOffline: false})
      })

      window.addEventListener('offline', e => {
        this.setState({isOffline: true})
      })

      setTimeout(() => {
        this.setState({isInitialized: true})
      }, 2000)
    }

    return this
  }
}