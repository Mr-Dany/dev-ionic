import { inject, Injectable } from '@angular/core';
import {
  LoadingController,
  ToastController,
  ToastOptions,
} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  loadingCtrl = inject(LoadingController);
  taoastCtrl = inject(ToastController);

  //======================loading===============
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' });
  }

  //======================Toast===============
  async presentToast(opts?: ToastOptions) {
    const toast = await this.taoastCtrl.create(opts);
    toast.present();
  }
}
