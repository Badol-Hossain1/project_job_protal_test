// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDb0L_UpsCNmISB1kpNvUwwJgCVypdo74I',
    authDomain: 'project-job-protal.firebaseapp.com',
    projectId: 'project-job-protal',
    storageBucket: 'project-job-protal.firebasestorage.app',
    messagingSenderId: '324194938305',
    appId: '1:324194938305:web:06d096601d84fb907f1340',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
