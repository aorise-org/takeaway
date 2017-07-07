import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

import { Takeaway } from '../../models/takeaway';
import { Carte } from '../../models/carte';
import { DetailsServiceProvider } from '../../providers/details-service/details-service';
import { UtilsServiceProvider } from '../../providers/utils-service/utils-service';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage implements OnInit{
  takeaway: Takeaway;
  errorMessage: string;
  cartes: Carte[] = [];
  // mode = 'observable';

  constructor(public alerCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,
              private detailsService: DetailsServiceProvider, private utilsService: UtilsServiceProvider) {
    console.log(this.navParams.data);
    this.takeaway = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  private getCartes(identify: string) {
    console.log('identify　＝　'　+　identify);
    this.detailsService.getCartes(identify)
      .subscribe(
        cartes => this.cartes = cartes,
        error => this.errorMessage = <any>error
      );
  }

  ngOnInit(): void {
    this.getCartes(this.takeaway.identify);
  }

  call(takeaway: Takeaway) {
    this.utilsService.call(this.alerCtrl, takeaway);
  }
}
