import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AlertController } from 'ionic-angular';
import {Takeaway} from "../../models/takeaway";

/*
  Generated class for the UtilsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UtilsServiceProvider {

  constructor(public http: Http) {
    console.log('Hello UtilsServiceProvider Provider');
  }

  /**
   * min ≤ num < max
   * @param Min
   * @param Max
   * @returns {any}
   */
  randomNum(Min, Max) {
    let Range = Max - Min;
    let Rand = Math.random();
    let num = Min + Math.floor(Rand * Range);
    return num;
  }

  /**
   * 拨打电话
   * @param alerCtrl
   * @param takeaway
   */
  call(alerCtrl: AlertController, takeaway: Takeaway) {
    let confirm = alerCtrl.create({
      title: takeaway.name,
      message: `${takeaway.telephone}`,
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log('Agree clicked');
            window.open(`tel:${takeaway.telephone}`);
          }
        }
      ]
    });
    confirm.present();
  }
}
