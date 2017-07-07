import { Component, OnInit } from '@angular/core';
import { App, AlertController, NavController, NavParams } from 'ionic-angular';

// import { environment } from '../../environments/environment';
import { Takeaway } from '../../models/takeaway';
import { TakeawayServiceProvider } from '../../providers/takeaway-service/takeaway-service';
import { UtilsServiceProvider } from '../../providers/utils-service/utils-service';

import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  errorMessage: string;
  takeaways: Takeaway[] = [];
  // mode = 'observable';

  constructor(private app: App, public alerCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,
              private takeawayService: TakeawayServiceProvider, private utilsService: UtilsServiceProvider) {

  }

  private getTakeaways() {
    this.takeawayService.getTakeaways()
      .subscribe(
        takeaways => this.takeaways = takeaways,
        error => this.errorMessage = <any>error
      );
  }

  gotoDetails(takeaway: Takeaway) {
    // this.navCtrl.push(DetailsPage, takeaway);
    this.app.getRootNav().push(DetailsPage, takeaway);
  }

  call(takeaway: Takeaway) {
    this.utilsService.call(this.alerCtrl, takeaway);
  }

  ngOnInit(): void {
    this.getTakeaways();
    // if (process.env.IONIC_ENV === 'prod') {
    //   console.log('we got a production buildp');
    // } else {
    //   console.log('we got a development build');
    // }
  }
}
