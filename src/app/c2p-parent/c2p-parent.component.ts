import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2p-parent',
  templateUrl: './c2p-parent.component.html',
  styleUrls: ['./c2p-parent.component.css']
})
export class C2pParentComponent implements OnInit {
  public message = "";
  constructor() { }

  ngOnInit() {
  }

}
