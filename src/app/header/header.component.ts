import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() navSelected = new EventEmitter<string>()

  constructor() { }

  onSelectNav (navItem: string) {
    this.navSelected.emit(navItem)
    // console.log('emits', navItem)
  }

  ngOnInit() {
  }

}
