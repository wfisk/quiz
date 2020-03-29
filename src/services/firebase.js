import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { authState } from 'rxfire/auth';

import { collectionData } from 'rxfire/firestore';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import config from 'src/config/firebase.json';
import currentUser from 'src/stores/current-user.js';

export const app = firebase.initializeApp( config );

// Cloud Firestore cls
// export const firestore = firebase.firestore( app );
export const firestore = firebase.firestore();

// Firebase Auth fba
// 
// export const auth = firebase.auth( app );
export const auth = firebase.auth();

const loggedIn$ = authState( auth )
  .pipe( 
    map( user => !!user ) 
  ); 

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithPopup = () => auth.signInWithPopup( googleProvider );



// see https://fireship.io/lessons/svelte-v3-overview-firebase/
export const unsubscribe = authState( auth ).subscribe( it => currentUser.set( it ) );

export function signOut(){
  auth.signOut();
}


// for debugging
window.firebase = firebase;