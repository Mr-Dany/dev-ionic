import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = inject(AngularFireAuth);

  //====================AUTENTICACIÓN=======================//

  //========ACCEDER========//
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }
  //========ACCEDER========//
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }
  //========ACCEDER========//
  updteUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }
}
