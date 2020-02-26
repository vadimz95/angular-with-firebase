import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.model';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {auth} from 'firebase';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: Observable<User>;

  constructor(private angularFireAuth: AngularFireAuth,
              private angularFireStore: AngularFirestore,
              private router: Router) {
    this.user = this.angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.angularFireStore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  createUser(formData) {
      return this.angularFireAuth.auth.createUserWithEmailAndPassword(formData.email, formData.password);
  }

  async login(formData) {
    const credential = await this.angularFireAuth.auth.signInWithEmailAndPassword(formData.email, formData.password);
    this.updateUserData(credential.user);
    this.router.navigate(['/dashboard']);
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential =  await this.angularFireAuth.auth.signInWithPopup(provider);
    this.updateUserData(credential.user);
    this.router.navigate(['/dashboard']);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.angularFireStore.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true });
  }

  signOut() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}


