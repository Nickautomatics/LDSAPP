import { Component } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public username: string;
  public password: string;



  constructor(public navCtrl: NavController, private http: Http, public toastController: ToastController, private router: Router) {
  }

  postRequest() {
  }

  login() {
    console.log('clicked');
    this.http.post('http://localhost:50204/api/AuthenticateTeacher', { Username: this.username, Password: this.password})
    .subscribe(res => {
      console.log(res);
      console.log(res.json().firstName);
      this.SuccessfulLogin(res.json().message);
      this.router.navigateByUrl('/attendance');
    },
    error => {
      console.log(error);
      const test = error.status;
      console.log(test.message);
      console.log(error.json());


      this.ErrorLogin(error.json().message);
    });
  }

  async ErrorLogin(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      color: 'warning',
      position: 'middle'
    });
    toast.present();
  }

   async SuccessfulLogin(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      color: 'success',
      position: 'middle'
    });
    toast.present();
  }

}
export class UserAuth {
  Input: string;
  password: string;
  id: string;
}
