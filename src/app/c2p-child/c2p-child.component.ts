import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c2p-child',
  templateUrl: './c2p-child.component.html',
  styleUrls: ['./c2p-child.component.css']
})
export class C2pChildComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    this.childEvent.emit('Tollplus India Pvt.Ltd.');
  }
}
