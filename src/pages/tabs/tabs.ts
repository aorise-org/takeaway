import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RandomPage } from '../random/random';
import { PersonalPage } from '../personal/personal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RandomPage;
  tab3Root = PersonalPage;

  constructor() {
  }
}
