import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cook-book';
  currentNav = 'recipes'

  onNavigate(nav: string){
    this.currentNav = nav
    // console.log(777777,  this.currentNav)
  }
}
