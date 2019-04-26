import { Container } from 'unstated-typescript'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { User } from 'firebase'

const isBrowser = typeof window !== 'undefined'

interface State {
  isOffline: boolean
  user?: User
}

export default class extends Container<State> {
  state: State = {
    isOffline: (isBrowser && !navigator.onLine) ? true : false
  }

  init = () => {
    if (isBrowser) {
      if (!firebase.apps.length) {  // not initialized
        firebase.initializeApp({
          projectId: process.env.FIREBASE_PROJECT_ID,
          apiKey: process.env.FIREBASE_WEB_API_KEY
        })
      }
      
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
    }
  }
}