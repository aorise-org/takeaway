import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Platform } from 'ionic-angular';

import { Carte } from '../../models/carte';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DetailsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DetailsServiceProvider {

  constructor(private http: Http, private platform: Platform) {
    console.log('Hello DetailsServiceProvider Provider');
  }

  getCartes(identify: string): Observable<Carte[]> {
    let url = `/assets/mock/${identify}-carte.json`;

    if (this.platform.is('cordova') && this.platform.is('android')) {
      url = 'file:///android_asset/www' + url;
    } else if (environment.production) {
      url = `/takeaway/assets/mock/${identify}-carte.json`;
    }

    console.log(url);
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
