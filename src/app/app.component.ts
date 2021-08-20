import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lime-table-angular-client';
  currentSection: string = 'filter'

  onClickFilter () {
    this.currentSection = 'filter'
  }

  onClickTable () {
    this.currentSection = 'table'
  }
}
