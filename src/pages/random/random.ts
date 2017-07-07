import { Component } from '@angular/core';
import { AlertController, NavParams } from 'ionic-angular';

import { Takeaway } from '../../models/takeaway';
import { TakeawayServiceProvider } from '../../providers/takeaway-service/takeaway-service';
import { UtilsServiceProvider } from '../../providers/utils-service/utils-service';

@Component({
  selector: 'page-random',
  templateUrl: 'random.html',
})
export class RandomPage {
  errorMessage: string;
  // takeaways: Takeaway[] = [];

  constructor(public alerCtrl: AlertController, public navParams: NavParams,
              private takeawayService: TakeawayServiceProvider, private utilsService: UtilsServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomPage');
  }

  getRandomTakeaway() {
    this.takeawayService.getTakeaways()
      .subscribe(
        takeaways => {
          let num = this.utilsService.randomNum(0, takeaways.length);
          console.log("num = " + num);
          let takeaway = takeaways[num];
          this.call(takeaway);
        },
        error => this.errorMessage = <any>error
      );
  }

  call(takeaway: Takeaway) {
    this.utilsService.call(this.alerCtrl, takeaway);
  }
}
