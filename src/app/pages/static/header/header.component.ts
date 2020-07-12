import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSendSign: EventEmitter<any> = new EventEmitter();

  constructor() { }

  

  ngOnInit() {
  }

  toggleSidebar() {
    this.toggleSendSign.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }
  
  
}
