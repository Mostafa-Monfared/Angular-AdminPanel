import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    });
  }

  async googleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      const result = await signInWithPopup(this.auth, provider);
      console.error('Sign out error:', result.user);

      return result;
    } catch (error: any) {
      let errorMessage = 'An unknown error occurred';
      if (error.code === 'auth/popup-blocked') {
        console.error('Firebase popup blocked:', error);
        errorMessage = 'Please enable popups for this website to sign in with Google. Check your browser settings and try again.';
      } else if (error.code === 'auth/cancelled-popup-request') {
        errorMessage = 'Authentication cancelled';
      } else if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Authentication window was closed';
      } else if (error.code === 'auth/configuration-not-found') {
        errorMessage = 'خطای پیکربندی فایربیس: تنظیمات پیدا نشد';
      }
      throw new Error(errorMessage);
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}