import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable()
export class LoginService{
    private user;

    constructor(private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                localStorage.setItem('mn-blog-user', JSON.stringify(this.user));
            } else {
                localStorage.setItem('mn-blog-user', null);
            }
        });
    }

    login(): Promise<Boolean>{
        return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(r => {
            let email = r.additionalUserInfo.profile['email'];
            console.log(email,'<- email')
            if(!['mila@un7qi3.co','bellella13@gmail.com'].includes(email)) {
                this.logout();
                alert('You are not allowed.')
                return false;
            }
            return true;
        })
    }

    logout(): Promise<any> {
        return this.afAuth.signOut()
        .then(r => {
            console.log('You\'ve just signed out.');
        });
    }

    async isAdmin() {
        console.log('isAdmin:',await this.afAuth.currentUser)
        return await this.afAuth.authState.pipe(first()).toPromise() ? true : false;
    }
}
